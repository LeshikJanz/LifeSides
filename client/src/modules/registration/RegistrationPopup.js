// @flow

import React from 'react'
import popup from 'hocs/popup'

type Props = {
  hide: () => void,
}


class RegistrationPopup extends React.Component<Props> {
  componentDidMount() {
    setTimeout(this.props.hide, 3000)
  }

  render() {
    return (<h1>Registration Popup</h1>)
  }
}

export default popup(RegistrationPopup)
