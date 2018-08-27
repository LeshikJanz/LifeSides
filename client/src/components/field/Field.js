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
}

const Field = ({ name, type = "text", title, value, onChange, placeholder, errorText, isError, required }: Props) => (
  <div className={`field ${isError ? "error" : ""}`}>
    <title>{title}</title>
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
    {
      errorText && isError && <span className="field-error">{errorText}</span>
    }
  </div>
)

export default Field
