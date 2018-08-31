import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { store } from '../index'
import { Provider } from 'react-redux'

const POPUP_ROOT = 'popup-root'

const popupWrapper = (WrappedComponent: any, hide, props = {}) =>
  <Fragment>
    <div className="popup-overlay" onClick={!props.isCloseOnOverlayForbidden && hide} />
    <div className="popup-notification">
      <Provider store={store}>
        <WrappedComponent hide={hide} {...props} />
      </Provider>
    </div>
  </Fragment>

const popup = (WrappedComponent: any) => {
  const hide = () => new Promise(resolve =>
    resolve(ReactDOM.unmountComponentAtNode(document.getElementById(POPUP_ROOT))))

  const show = (props) => new Promise(resolve =>
    resolve(ReactDOM.render(
      popupWrapper(WrappedComponent, hide, props), document.getElementById(POPUP_ROOT)
    )))

  return ({ show, hide })
}

export default popup
