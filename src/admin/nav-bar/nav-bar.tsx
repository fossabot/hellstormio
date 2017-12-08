import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

/** A Navigation Bar component */
export class AdminNavBar extends React.Component {
  public render() {
    return (
      <Router>
        <div id='navbar' className='topnav'>
          <div>Admin NavBar</div>
        </div>
      </Router>
    )
  }
}
