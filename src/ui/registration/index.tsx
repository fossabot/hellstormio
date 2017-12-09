import * as React from 'react'
import axios from 'axios'

interface IRegistrationState {
  readonly username: string
  readonly email: string
  readonly password: string
}

export class Join extends React.Component<any, IRegistrationState> {
  public constructor(props: any) {
    super(props)
    this.signUp = this.signUp.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.state = {
      username: '',
      email: '',
      password: '',
    }
  }

  public handleNameChange(e: any) {
    this.setState({ username: e.target.value })
  }

  public handleEmailChange(e: any) {
    this.setState({ email: e.target.value })
  }

  public handlePasswordChange(e: any) {
    this.setState({ password: e.target.value })
  }

  public signUp() {
    axios.post('/users', {
      username: this.state.username,
      email: this.state.email.toLowerCase(),
      password: this.state.password,
    })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  public render() {
    return (
      <div>
        <form>
          <h2>Please sign up</h2>
          <label>Name</label>
          <input type='name' onChange={this.handleNameChange} id='username' placeholder='Name' required />
          <label >Email address</label>
          <input type='email' onChange={this.handleEmailChange} id='email' placeholder='Email address' required />
          <label>Password</label>
          <input type='password' onChange={this.handlePasswordChange} id='password' placeholder='Password' required />

          <button onClick={this.signUp} type='button'>Sign up</button>
        </form>
      </div>

    )
  }
}
