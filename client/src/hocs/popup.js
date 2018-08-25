// @flow
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
const POPUP_ROOT = 'popup-root'

const popupWrapper = (WrappedComponent: any, hide, props) =>
  <Fragment>
    <div className="popup-overlay" onClick={!props.isCloseOnOverlayForbidden && hide} />
    <div className="popup-notification">
      <WrappedComponent hide={hide} { ...props } />
    </div>
  </Fragment>

const popup = (WrappedComponent: any) => {
  const hide = () => ReactDOM.unmountComponentAtNode(document.getElementById(POPUP_ROOT))

  const show = (props) =>
    ReactDOM.render(
      popupWrapper(WrappedComponent, hide, props), document.getElementById(POPUP_ROOT)
    )

  return ({ show, hide })
}

export default popup
