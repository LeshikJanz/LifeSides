import type { Popup } from "types/popup"
import React from 'react'
import Field from 'components/field/Field'
import popup from 'hocs/popup'
import api from 'api/habit'
import SuccessfulHabitCreationPopup from './SuccessfulHabitCreationPopup'
import { compose } from 'redux'
import { connect } from 'react-redux'
import {
  selectLifesideRequested,
} from 'components/popups/createLifeside/actions'

const SUCCESSFULL_POPUP_SHOW_TIMES = 2

type State = {
  isFormValid: boolean,
  nonValidFieldNames: Object,
  error: string,
}

type Props = {
  lifesideId: string,
  selectLifesideRequested: (lifesideId: string) => void,
  habitsCount: number,
} & Popup

class CreateHabit extends React.Component<Props, State> {
  formRef: ?HTMLFormElement

  state = {
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
    const { name, repeatCount } = e.target.elements
    api.createHabit({
      name: name.value,
      repeatCount: repeatCount.value,
    }, this.props.lifesideId)
      .then(this.props.hide().then(() => {
        this.props.selectLifesideRequested(this.props.lifesideId)
        if (this.props.habitsCount < SUCCESSFULL_POPUP_SHOW_TIMES) {
          SuccessfulHabitCreationPopup.show({ name: name.value })
        }
      }))
      .catch(({ error }) => {
        if (error && error.message) {
          this.setState({ error: error.message })
        }
      })
  }

  render () {
    const { isFormValid, error } = this.state
    const { hide } = this.props
    return (
      <div className="popup-container popup-central">
        <div className="popup-close" onClick={hide} />
        <div className="popup-header successful-title">
          Создание привычки
        </div>
        <hr className="popup-header-line" />
        <form
          className="popup-body"
          ref={(ref) => (this.formRef = ref)}
          onSubmit={this.handleSubmit}
        >
          <Field
            name="name"
            title="Краткое описание"
            type="text"
            placeholder="До 40 символов"
            maxLength={40}
            required
          />
          <Field
            name="repeatDelay"
            title="Повторять каждые (мин)"
            type="number"
            placeholder="минуты"
            maxLength={20}
            required
          />
          <div className="inline-fields">
            <Field
              name="repeatCount"
              title="Количество повторений"
              type="number"
              placeholder="Мин 15"
              min={15}
              required
            />
          </div>
          {
            error && <span className="error">{error}</span>
          }
          <div className="auth-actions form-actions">
            <button className="green gta" disabled={!isFormValid}>
              Создать привычку
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default compose(popup,
  connect(({ lifeside }) => ({
    lifesideId: lifeside.selected && lifeside.selected.id,
    habitsCount: lifeside.selected && lifeside.selected.habits && lifeside.selected.habits.length,
  }), ({ selectLifesideRequested }))
)(CreateHabit)
