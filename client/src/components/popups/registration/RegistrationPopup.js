import type { Popup } from "types/popup"
import type { DropdownItem } from 'types/common'
import React from 'react'
import popup from 'hocs/popup'
import './styles.scss'
import Field from 'components/field/Field'
import Dropdown from 'components/dropdowns/Dropdown'
import api from 'api/account'
import { HOURS, MINUTES } from './constants'
import { isPasswordsSame } from './utils'
import SuccessfulRegistrationPopup from './SuccessfulRegistrationPopup'

type State = {
  notificationHour: ?DropdownItem,
  notificationMinute: ?DropdownItem,
  isFormValid: boolean,
  nonValidFieldNames: Object,
  errors: {
    username?: string,
    email?: string,
  },
}

class RegistrationPopup extends React.Component<Popup, State> {
  formRef: any

  state = {
    notificationHour: null,
    notificationMinute: null,
    isFormValid: false,
    nonValidFieldNames: {},
    errors: {},
  }

  componentDidMount() {
    this.formRef.addEventListener("blur", this.formValidation, true)
    document.addEventListener("keyup", this.checkIfFieldBecomeValid, true)
  }

  componentWillUnmount() {
    this.formRef.removeEventListener("blur", this.formValidation, true)
    document.removeEventListener("keyup", this.checkIfFieldBecomeValid, true)
  }

  handleSubmit = (e: { target: any } & Event) => {
    e.preventDefault()
    this.setState({ errors: {} })
    const { email, username, password } = e.target.elements
    const { notificationHour, notificationMinute } = this.state
    api.createAccount({
      email: email.value,
      username: username.value,
      password: password.value,
      notificationHour: notificationHour && notificationHour.value,
      notificationMinute: notificationMinute && notificationMinute.value,
    })
      .then(() => this.props.hide().then(SuccessfulRegistrationPopup.show))
      .catch(({ error }) => {
        if (error && error.details && error.details.messages) {
          this.setState({
            errors: error.details.messages,
            nonValidFieldNames: Object.keys(error.details.messages)
              .reduce((res, el) => ({ ...res, [el]: true }), {})
          })
        }
      })
  }

  onDropdownChange = (name: string, value: string) =>
    this.setState({ [name]: value })

  checkIfFieldBecomeValid = (e) => {
    if (e.target.checkValidity() && this.state.nonValidFieldNames[e.target.name]) {
      this.setState(prevState => ({
        nonValidFieldNames: {
          ...prevState.nonValidFieldNames,
          [e.target.name]: false,
        }
      }))
    }
    const { password, submitPassword } = this.formRef
    const isPassSame = isPasswordsSame(password.value, submitPassword.value)
    if (isPassSame) {
      this.setState({ [password.name]: false, [submitPassword.name]: false })
      this.formValidation()
    }
  }

  isFormValid = () => {
    const nonValidFieldNames = {}
    const requiredElemsFilled = [...this.formRef.elements].every(elem => {
      if (elem.checkValidity()) {
        return true
      }
      if (elem.value && elem.name !== document.activeElement.name) {
        nonValidFieldNames[elem.name] = true
      }
      return false
    })
    const { password, submitPassword } = this.formRef
    const isPassSame = isPasswordsSame(password.value, submitPassword.value)
    if (isPassSame === false) {
      nonValidFieldNames[password.name] = nonValidFieldNames[submitPassword.name] = true
    }
    this.setState({ nonValidFieldNames })
    return isPassSame === true && requiredElemsFilled
  }

  formValidation = () => {
    const isFormValid = this.isFormValid()
    if (isFormValid) {
      this.setState({ isFormValid })
    }
    if (!isFormValid && this.state.isFormValid) {
      this.setState({ isFormValid })
    }
  }

  render() {
    const { hide } = this.props
    const {
      notificationHour, notificationMinute,
      isFormValid, nonValidFieldNames, errors,
    } = this.state
    return (
      <div className="popup-central registration-wrapper popup-container">
        <div className="popup-close" onClick={hide} />
        <div className="popup-header">
          <div className="popup-header-title dark-red">
            Регистрация
          </div>
          <hr className="popup-header-line" />
        </div>
        <form
          className="popup-body"
          onSubmit={this.handleSubmit}
          ref={(ref) => (this.formRef = ref)}
        >
          <Field
            name="email"
            title="Email*"
            type="email"
            placeholder="email"
            required
            errorText={errors.email || "Неверный email"}
            isError={nonValidFieldNames["email"]}
          />
          <Field
            name="username"
            title="Имя пользователя*"
            placeholder="имя пользователя"
            required
            errorText={errors.username || "Неверное имя пользователя"}
            isError={nonValidFieldNames["username"]}
          />
          <div className="field">
            <title>Получать уведомления в ( чч:мм )</title>
            <div className="inline">
              <Dropdown
                name="notificationHour"
                activeItem={notificationHour}
                onChange={this.onDropdownChange}
                items={HOURS}
                placeholder="чч"
                tabIndex="5"
                width="60"
              />
              <Dropdown
                name="notificationMinute"
                activeItem={notificationMinute}
                onChange={this.onDropdownChange}
                items={MINUTES}
                placeholder="мм"
                tabIndex="5"
                width="60"
              />
            </div>
          </div>
          <Field
            type="password"
            name="password"
            title="Пароль*"
            placeholder="пароль"
            required
            errorText={errors.password}
            isError={nonValidFieldNames["password"]}
          />
          <Field
            name="submitPassword"
            title="Подтверждение пароля*"
            placeholder="подтверждение пароля"
            type="password"
            required
            errorText="Пароли не совпадают"
            isError={nonValidFieldNames["submitPassword"]}
          />
          <div className="form-actions">
            <button className="green gta" disabled={!isFormValid}>
              Продолжить
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default popup(RegistrationPopup)
