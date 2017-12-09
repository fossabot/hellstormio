import * as React from 'react'

export class Join extends React.Component {
  public render() {
    return (
      <div className='join'>
        <form action='/api/v1/users' method='post'>
          <label>Enter your name in the database</label>
          <input type='text' name='username' placeholder='Username…' />
          <input type='email' name='email' placeholder='Email…' />
          <input type='password' name='password' placeholder='Your password…' />
        </form>
        <button type='submit'>Submit</button>
      </div>
    )
  }
}
