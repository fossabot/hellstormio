import * as React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export class NavBar extends React.Component {
  public render() {
    return (
      <Router>
        <div id='navbar'>
          <ul className='navbar'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/topics'>Topics</Link></li>
          </ul>

          <hr/>

          <Route exact path='/' component={this.homeComponent}/>
          <Route exact path='/' component={this.aboutComponent}/>
          <Route exact path='/' component={this.topicsComponent}/>
        </div>
      </Router>
    )
  }

  public homeComponent = () => (
    <div>
      Home
    </div>
  )

  public aboutComponent = () => (
    <div>
      About Page
    </div>
  )

  public topicsComponent = () => (
    <div>
      Topics
    </div>
  )
}
