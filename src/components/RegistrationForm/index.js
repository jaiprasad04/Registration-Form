// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showFirstNameError: false,
    showLastNameError: false,
    isFormSubmitted: true,
  }

  submitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({isFormSubmitted: false})
    } else {
      this.setState({
        showFirstNameError: !isValidFirstName,
        showLastNameError: !isValidLastName,
        isFormSubmitted: true,
      })
    }
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()
    this.setState({showFirstNameError: !isValidFirstName})
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()
    this.setState({showLastNameError: !isValidLastName})
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isFormSubmitted: !prevState.isFormSubmitted,
      firstName: '',
      lastName: '',
    }))
  }

  validateFirstName = () => {
    const {firstName} = this.state

    return firstName !== ''
  }

  validateLastName = () => {
    const {lastName} = this.state

    return lastName !== ''
  }

  render() {
    const {
      firstName,
      lastName,
      showFirstNameError,
      showLastNameError,
      isFormSubmitted,
    } = this.state

    const firstNameError = showFirstNameError ? 'error-field' : ''
    const lastNameError = showLastNameError ? 'error-field' : ''

    return (
      <div className="app-container">
        <h1 className="form-title">Registration</h1>
        <div className="view-container">
          {isFormSubmitted ? (
            <form className="form-container" onSubmit={this.submitForm}>
              <div className="input-container">
                <label className="input-label" htmlFor="firstName">
                  FIRST NAME
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  placeholder="First name"
                  onChange={this.onChangeFirstName}
                  onBlur={this.onBlurFirstName}
                  className={`name-input-field ${firstNameError}`}
                />
              </div>
              {showFirstNameError ? (
                <p className="error-message">Required</p>
              ) : (
                ''
              )}
              <div className="input-container">
                <label className="input-label" htmlFor="lastName">
                  LAST NAME
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  placeholder="Last name"
                  onChange={this.onChangeLastName}
                  onBlur={this.onBlurLastName}
                  className={`name-input-field ${lastNameError}`}
                />
              </div>
              {showLastNameError ? (
                <p className="error-message">Required</p>
              ) : (
                ''
              )}
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          ) : (
            <>
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
                className="success-image"
              />
              <p className="submitted-text">Submitted Successfully</p>
              <button
                type="button"
                className="submit-button"
                onClick={this.onClickSubmitAnotherResponse}
              >
                Submit Another Response
              </button>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
