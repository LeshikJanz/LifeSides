// @flow

import React from "react"
import '../styles/level.scss'

type Props = {
  name: string,
  level: string,
}

const Level = ({ name, value }: Props) => (
  <div className="level-wrapper">
    <span>{name}</span>
    <hr />
    <span>{value} уровень</span>
  </div>
)

export default Level
