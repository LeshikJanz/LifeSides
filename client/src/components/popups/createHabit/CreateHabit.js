// @flow

import React from 'react'
import Field from 'components/field/Field'
import popup from 'hocs/popup'

class CreateHabit extends React.Component<{}> {
  render () {
    const { hide, error } = this.props
    return (
      <div className="popup-container popup-central">
        <div className="popup-close" onClick={hide} />
        <div className="popup-header successful-title">
          Создание привычки
        </div>
        <hr className="popup-header-line" />
        <form className="popup-body" onSubmit={this.handleSubmit}>
          <Field
            name="email"
            title="Краткое описание ( до 40 символов )"
            type="name"
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
            <button className="green gta">
              Войти в приложение
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default popup(CreateHabit)
