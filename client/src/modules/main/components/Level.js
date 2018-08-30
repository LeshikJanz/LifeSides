import type { Lifeside } from 'types/Lifeside'
import React from "react"
import '../styles/level.scss'

type Props = {
  name: string,
  level: string,
  lifesides: Lifeside[],
  onChangeLifeside: () => void,
}

const Level = ({ name, value }: Props) => (
  <div className="level-wrapper">
    <span>{name}</span>
    <hr />
    <span>{value} уровень</span>
  </div>
)

export default Level
