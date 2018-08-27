// @flow

import React from 'react'
import popup from 'hocs/popup'
import Field from 'components/field/Field'
import api from 'api/account'
import './styles.scss'

type Props = {
  hide: () => void,
}

type State = {
  error: string,
}

class AuthPopup extends React.Component<Props, State> {
  state = {
    error: "",
  }

  handleSubmit = (e: { target: any } & Event) => {
    e.preventDefault()
    const { email, password } = e.target.elements
    api.auth({ email: email.value, password: password.value })
      .then(() => {
        this.props.hide()
        alert("Успешная авторизация")
      })
      .catch(({ error }) => {
        if (error && error.message) {
          this.setState({ error: error.message })
        }
      })
  }

  render () {
    const { hide } = this.props
    const { error } = this.state
    return (
      <div className="popup-container popup-central">
        <div className="popup-close" onClick={hide} />
        <div className="popup-header successful-title">
          Авторизация
        </div>
        <hr className="popup-header-line" />
        <form className="popup-body" onSubmit={this.handleSubmit}>
          <Field
            name="email"
            title="Email"
            type="email"
            placeholder="email или username"
            required
          />
          <Field
            type="password"
            name="password"
            title="Пароль"
            placeholder="пароль"
            required
          />
          {
            error && <span className="error">{error}</span>
          }
          <div className="auth-actions form-actions">
            <button className="dark-red-empty gta" onClick={hide}>
              Отмена
            </button>
            <button className="green gta">
              Войти в приложение
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default popup(AuthPopup)
