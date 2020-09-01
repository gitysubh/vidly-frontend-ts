import { createAction } from "@reduxjs/toolkit";
import { ApiActionPayload } from "./../types/apiActionPayload";

export const apiCallBegan = createAction<ApiActionPayload>("api/callBegan");
export const apiCallSuccess = createAction<any>("api/callSuccess");
export const apiCallFailed = createAction<any>("api/callFailed");
