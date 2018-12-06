// @flow

import { Habit } from 'types/Habit'
import React from 'react'
import ReactSVG from 'react-svg'
import { connect } from 'react-redux'
import flaskSvg from 'assets/svg/flask.svg'
import '../styles/flask.scss'
import FlaskSmile from './FlaskSmile'

type Props = {
  completedHabits: Habit[],
  flaskColor: string,
}

class Flask extends React.Component<Props> {
  flaskPaths: any[] = []
  flaskTexts: any[] = []

  componentDidMount() {
    setTimeout(this.initFlask, 1000)
  }

  componentDidUpdate() {
    this.fillFlask()
    if (this.flaskPaths.length || this.flaskTexts.length) return
    this.flaskPaths = document.querySelectorAll("svg.flask-svg path")
    this.flaskTexts = document.querySelectorAll("svg.flask-svg text")
  }

  initFlask = () => {
    this.flaskPaths = document.querySelectorAll("svg.flask-svg path")
    this.flaskTexts = document.querySelectorAll("svg.flask-svg text")
    this.fillFlask()
  }

  fillFlask = () => {
    if (this.flaskPaths.length && this.flaskTexts.length) {
      this.props.completedHabits.map((habit, index) => this.fillFlaskPathText(index, habit.name))
    }
  }

  fillFlaskPathText = (pathNumber: number, text: string) => {
    this.flaskPaths[pathNumber].style.fill = this.props.flaskColor
    this.flaskTexts[pathNumber].style.fill = "#fff"
    this.flaskTexts[pathNumber].firstChild.textContent = `• ${text}`
  }

  render() {
    const { completedHabits } = this.props
    return (
      <div className="flask-container">
        {
          !completedHabits.length && <FlaskSmile />
        }
        <ReactSVG
          src={flaskSvg}
          svgClassName="flask-svg"
        />
      </div>
    )
  }
}

export default connect(({ lifeside }) => ({
  completedHabits: (lifeside.selected && lifeside.selected.habits
  && lifeside.selected.habits.filter(habit => habit.isCompleted)) || [],
  flaskColor: lifeside.selected && lifeside.selected.flaskColor,
}))(Flask)
