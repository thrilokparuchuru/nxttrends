/* eslint-disable prettier/prettier */
// Write your JS code here

import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {userName: '', password: '', error: ''}

  username = event => {
    this.setState({userName: event.target.value})
  }

  password = event => {
    this.setState({password: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const bodyData = {userName, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(bodyData),
    }

    const response = await fetch(url, options)
    // const data = await response.json()
  }

  render() {
    return (
      <div className="login-route-container">
        <img
          className="login-route-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <form onSubmit={this.onSubmitForm}>
          <img
            className="login-route-form-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <div className="username-container">
            <label htmlFor="UserName">UserName</label> <br />
            <input
              className="form-input"
              type="input"
              id="UserName"
              placeholder=" Username"
              onChange={this.username}
            />
          </div>
          <div className="password-container">
            <label htmlFor="Password">Password</label> <br />
            <input
              className="form-input"
              type="password"
              id="Password"
              placeholder=" Password"
              onChange={this.password}
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm
