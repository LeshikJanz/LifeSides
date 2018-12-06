// @flow

import React from "react";
import isNumericInputValue from "utils/isNumericInputValue";

type Props = {
  name?: string,
  title?: string,
  type?: string,
  value?: string,
  placeholder?: string,
  onChange?: (e: { target: any } & Event) => void,
  required?: boolean,
  errorText?: string[] | string,
  isError?: boolean,
  min?: number,
  max?: number,
  minLength?: number,
  maxLength?: number
};

class Field extends React.Component<Props> {
  handleChange = (e: Event) => {
    console.log("this.props")
    console.log(this.props)
    if (this.props.type === "number") {
      console.log("isNumericInputValue(e)")
      console.log(isNumericInputValue(e))
      isNumericInputValue(e) && this.props.onChange(e);
    }
    this.props.onChange(e);
  };

  render() {
    const {
      name,
      type = "text",
      title,
      value,
      placeholder,
      errorText,
      isError,
      required,
      min,
      max,
      minLength,
      maxLength
    } = this.props;
    const errorMessage = Array.isArray(errorText)
      ? errorText.reduce((res, el) => `${el}. ${res}`, "")
      : errorText;
    return (
      <div className={`field ${isError ? "error" : ""}`}>
        <title>{title}</title>
        <input
          name={name}
          type={type}
          value={value}
          onChange={this.handleChange}
          placeholder={placeholder}
          required={required}
          min={min}
          max={max}
          minLength={minLength}
          maxLength={maxLength}
        />
        {errorMessage && isError && (
          <span className="field-error">{errorMessage}</span>
        )}
      </div>
    );
  }
}

export default Field;
