import * as React from "react";

export interface InputProps {
  name: string;
  errorText?: string;
  label?: string;
  [x: string]: any;
}

const Input: React.SFC<InputProps> = ({
  name,
  errorText,
  label,
  ...others
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={name}
        className={`form-control ${errorText ? "is-invalid" : ""}`}
        {...others}
      />
      <small className="invalid-feedback">{errorText}</small>
    </div>
  );
};

export default Input;
