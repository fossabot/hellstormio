import * as React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { Join } from '../registration/index'

/** A Navigation Bar component */
export class NavBar extends React.Component {
  public render() {
    return (
      <Router>
        <div id='navbar' className='topnav'>
          <NavLink className='left' to='/'>Home</NavLink>
          <NavLink className='left' to='/ about'>About</NavLink>
          <NavLink className='left' to='/topics'>Topics</NavLink>

          <div className='sign'>
            <NavLink className='right' to='/login'>Login</NavLink>
            <NavLink className='right' to='/register'>Register</NavLink>
          </div>
          <input type='text' placeholder='Search…' />
          <Route exact path='/register' component={Join}/>
        </div>
      </Router>
    )
  }

  public renderRouters = () => {
    return (
      <Route path='/login' component={this.topicsComponent} />
    )
  }

  public topicsComponent = () => (
    <div>
      Topics
    </div>
  )
}
