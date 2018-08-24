// @flow

import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { init } from './actions'
import './styles/styles.scss'
import './styles/video.scss'
import { Player } from 'video-react'
import coffeeShop from 'assets/videos/CoffeeShoptablet.webm'

type Props = {
  onInit: () => void,
}

class Welcome extends React.Component<Props> {
  componentDidMount() {
    this.props.onInit()
  }

  render() {
    return (
      <Fragment>
        <div className="main-label-wrapper">
          <h1 className="main-label">
            Добро пожаловать в Life Sides! Проращивайте привычки и становитесь лучшей версией себя!
          </h1>
          <div className="main-actions">
            <button className="dark-red big">
              Регистрация
            </button>
            <button className="green big">
              Авторизация
            </button>
          </div>
        </div>
        <Player autoPlay muted loop disableCompletely>
          <source src={coffeeShop} type="video/mp4" />
        </Player>
      </Fragment>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  onInit: () => dispatch(init()),
});

export default connect(null, mapDispatchToProps)(Welcome)
