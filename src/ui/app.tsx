import * as React from 'react'
import { NavBar } from './nav-bar'
import { Footer } from './footer'
import { IAppState } from '../lib/app-state'
import { Dispatcher, AppStore } from '../lib/dispatcher'

interface IAppProps {
  readonly dispatcher: Dispatcher
  readonly appStore: AppStore
}

export class App extends React.Component<IAppProps, IAppState> {
  public render() {
    return (
      <div id='root'>
        <NavBar />
        <div>{this.props.dispatcher.loadConsole}</div>
        <Footer />
      </div>
    )
  }
}
