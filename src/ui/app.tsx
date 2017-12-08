import * as React from 'react'
import { NavBar } from './nav-bar'
import { Footer } from './footer'
const Raven = require('raven-js')

Raven.config('https://a2465449ea624f42ac28ade5df68ffe0@sentry.io/224389').install()

export class App extends React.Component {
  public render() {
    return (
      <div id='root'>
        <NavBar />
        <button onClick={this.handleClick} >ERROR!</button>
        <Footer />
      </div>
    )
  }

  public handleClick = (err: any) => {
    try {
      throw new Error('Уупс!')
    } catch (e) {
      console.log(e.name + ': ' + e.message)
      Raven.captureException(e)
    }
  }
}
