import * as React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

export class NavBar extends React.Component {
  public render() {
    return (
      <Router>
        <div id='navbar'>
          <ul className='navbar'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/topics'>Topics</NavLink></li>

            <li className='rigth'><NavLink to='/login'>Login</NavLink></li>
          </ul>

          {this.renderRouters()}
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
