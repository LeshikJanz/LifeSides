// @flow

import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { init } from './actions'
import './styles/styles.scss'
import './styles/video.scss'
import { Player } from 'video-react'
import coffeeShop from 'assets/videos/CoffeeShoptablet.webm'
import RegistrationPopup from "modules/registration/RegistrationPopup"
import AuthPopup from "modules/auth/AuthPopup"

type Props = {
  onInit: () => void,
}

class Welcome extends React.Component<Props> {
  componentDidMount() {
    this.props.onInit()
  }

  render() {
    console.log("coffeeShop")
    console.log(coffeeShop)
    return (
      <Fragment>
        <div className="main-label-wrapper">
          <h1 className="main-label">
            Добро пожаловать в Life Sides! Проращивайте привычки и становитесь лучшей версией себя!
          </h1>
          <div className="main-actions">
            <button className="dark-red big" onClick={RegistrationPopup.show}>
              Регистрация
            </button>
            <button className="green big" onClick={AuthPopup.show}>
              Авторизация
            </button>
          </div>
        </div>
        <Player autoPlay muted loop disableCompletely>
          <source src={coffeeShop} type="video/webm" />
        </Player>
      </Fragment>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  onInit: () => dispatch(init()),
});

export default connect(null, mapDispatchToProps)(Welcome)
