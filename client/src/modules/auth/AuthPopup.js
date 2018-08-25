// @flow

import React from 'react'
import popup from 'hocs/popup'

type Props = {
  hide: () => void,
}

class AuthPopup extends React.Component {
  render() {
    return (
      <div>
        <button className="popup-close" onClick={this.props.hide}>Close</button>
        <h1>AuthPopup</h1>
      </div>
    )
  }
}

export default popup(AuthPopup)
