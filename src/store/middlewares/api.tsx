import {
  createAsyncThunk,
  PayloadAction,
  Store,
  AnyAction,
  CombinedState,
} from "@reduxjs/toolkit";
import httpService from "../../services/httpService";
import { ApiActionPayload } from "../types/apiActionPayload";
import { AxiosResponse } from "axios";
import { apiCallSuccess, apiCallFailed, apiCallBegan } from "../slices/api";
import rootReducer from "../slices";

export const api = ({ dispatch }: CombinedState<any>) => (
  next: (action: { payload: any; type: string }) => any
) => async (action: PayloadAction<ApiActionPayload>) => {
  if (action.type !== apiCallBegan.type) {
    return next(action);
  }

  const { onStart, onSuccess, onError } = action.payload;

  if (onStart) dispatch({ type: onStart });

  try {
    const response = await performHttpAction(action.payload);
    dispatch(apiCallSuccess(response?.data));

    if (onSuccess) {
      dispatch({ type: onSuccess, payload: response?.data });
    }
  } catch (err) {
    dispatch(apiCallFailed(err.message));
    if (onError) dispatch({ type: onError, payload: err.message });
  }
};

function performHttpAction(
  payload: ApiActionPayload
): Promise<AxiosResponse<any>> | undefined {
  switch (payload.method) {
    case "get":
      return httpService.get(payload.url);
      break;
    case "post":
      return httpService.post(payload.url, payload.data);
      break;
    case "delete":
      return httpService.delete(payload.url);
      break;
    // TODO: Implement rest
  }
  return Promise.reject();
}
