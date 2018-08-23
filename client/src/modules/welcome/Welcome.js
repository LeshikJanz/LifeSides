// @flow

import React from 'react'
import { connect } from 'react-redux'
import { init } from './actions'

class Welcome extends React.Component {
  componentDidMount () {
    this.props.onInit()
    console.log("here")
  }

  render () {
    return (
      <h1>Welcome</h1>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  onInit: () => dispatch(init()),
});

export default connect(null, mapDispatchToProps)(Welcome)
