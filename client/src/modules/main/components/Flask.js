// @flow

import React from 'react'
import ReactSVG from 'react-svg'
import flaskSvg from 'assets/svg/flask.svg'
import '../styles/flask.scss'
import FlaskSmile from './FlaskSmile'

class Flask extends React.Component<{}> {
  render () {
    return (
      <div className="flask-container">

        <FlaskSmile />
        <ReactSVG src={flaskSvg} />
      </div>
    )
  }
}

export default Flask
