import * as React from 'react'
import { NavBar } from './nav-bar'
import { Footer } from './footer'
import { Join } from './registration'

export class App extends React.Component {
  public render() {
    return (
      <div id="root">
        <NavBar />
        <Join />
        <Footer />
      </div>
    )
  }
}
