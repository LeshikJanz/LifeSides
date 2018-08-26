// @flow

import React from 'react'

type Props = {
  title: string,
  type: string,
  value: string,
  placeholder: string,
  onChange: (e: { target: any } & Event) => void,
}

const Field = ({ title, value, onChange, placeholder }) => (
  <div className="field">
    <title>{title}</title>
    <input type="text" value={value} onChange={onChange} placeholder={placeholder} />
  </div>
)

export default Field
