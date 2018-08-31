import type { Popup } from "types/popup"
import type { DropdownItem } from 'types/common'
import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Field from 'components/field/Field'
import popup from 'hocs/popup'
import api from 'api/lifeside'
import SuccessfulLifesidePopup from './SuccessfulLifesidePopup'
import ColorDropdown from 'components/dropdowns/ColorDropdown'
import { FLASK_COLORS } from 'constants/flaskColors'
import { fetchLifesidesRequested } from 'components/popups/createLifeside/actions'

type State = {
  isFormValid: DropdownItem,
  isFormValid: boolean,
  nonValidFieldNames: Object,
  error: string,
}

type Props = {
  fetchLifesidesRequested: () => void,
} & Popup

class CreateLifeside extends React.Component<Props, State> {
  formRef: ?HTMLFormElement

  state = {
    flaskColor: FLASK_COLORS[0],
    isFormValid: false,
    nonValidFieldNames: {},
    error: "",
  }

  componentDidMount () {
    document.addEventListener("keyup", this.formValidation, true)
    document.addEventListener("mouseup", this.formValidation, true)
  }

  componentWillUnmount () {
    document.removeEventListener("keyup", this.formValidation, true)
    document.removeEventListener("mouseup", this.formValidation, true)
  }

  isFormValid = () => {
    const nonValidFieldNames = {}
    return [...this.formRef.elements].every(elem => {
      if (elem.checkValidity()) {
        return true
      }
      if (elem.value && elem.name !== document.activeElement.name) {
        nonValidFieldNames[elem.name] = true
      }
      return false
    })
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

  handleSubmit = (e: { target: any } & Event) => {
    e.preventDefault()
    this.setState({ error: "" })
    const { name } = e.target.elements
    api.createLifeside({
      name: name.value,
      flaskColor: this.state.flaskColor.value,
    })
      .then(this.props.hide().then(() => {
        console.log("here")
        this.props.fetchLifesidesRequested()
        SuccessfulLifesidePopup.show({ name: name.value })
      }))
      .catch(({ error }) => {
        if (error && error.message) {
          this.setState({ error: error.message })
        }
      })
  }

  onDropdownChange = (name: string, value: string) =>
    this.setState({ [name]: value })

  render () {
    const { isFormValid, error, flaskColor } = this.state
    const { hide } = this.props
    return (
      <div className="popup-container popup-central">
        <div className="popup-close" onClick={hide} />
        <div className="popup-header successful-title">
          Создание стороны жизни
        </div>
        <hr className="popup-header-line" />
        <form
          className="popup-body"
          ref={(ref) => (this.formRef = ref)}
          onSubmit={this.handleSubmit}
        >
          <Field
            name="name"
            title="Имя"
            type="text"
            placeholder="Начните вводить"
            required
          />
          <div className="field">
            <title>Цвет колбы</title>
            <ColorDropdown
              name="flaskColor"
              activeItem={flaskColor}
              onChange={this.onDropdownChange}
              items={FLASK_COLORS}
              width="45"
            />
          </div>
          {
            error && <span className="error">{error}</span>
          }
          <div className="auth-actions form-actions">
            <button className="green gta" disabled={!isFormValid}>
              Создать сторону жизни
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default compose(
  popup,
  connect(null, ({ fetchLifesidesRequested })),
)(CreateLifeside)
