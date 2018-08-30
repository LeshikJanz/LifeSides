// @flow

import React from 'react'
import ReactSVG from 'react-svg'
import flaskSvg from 'assets/svg/flask.svg'

class Flask extends React.Component<{}> {
  render () {
    return (
      <div>
        <ReactSVG src={flaskSvg} />
      </div>
    )
  }
}

export default Flask
