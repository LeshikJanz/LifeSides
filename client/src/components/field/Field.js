// @flow

import React from 'react'

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
  maxLength?: number,
}

const Field =
  ({
    name, type = "text", title, value, onChange,
    placeholder, errorText, isError, required, min, max, minLength, maxLength,
  }: Props) => {
    const errorMessage = Array.isArray(errorText) ? errorText.reduce((res, el) => `${el}. ${res}`, '')
      : errorText
    return (
      <div className={`field ${isError ? "error" : ""}`}>
        <title>{title}</title>
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          min={min}
          max={max}
          minLength={minLength}
          maxLength={maxLength}
        />
        {
          errorMessage && isError && <span className="field-error">{errorMessage}</span>
        }
      </div>
    )
  }

export default Field
