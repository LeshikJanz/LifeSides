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
  errorText?: string,
  isError?: boolean,
  min?: number,
  max?: number,
}

const Field =
  ({
     name, type = "text", title, value, onChange,
     placeholder, errorText, isError, required, min, max,
   }: Props) => (
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
      />
      {
        errorText && isError && <span className="field-error">{errorText}</span>
      }
    </div>
  )

export default Field
