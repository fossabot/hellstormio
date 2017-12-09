import * as React from 'react'
import { NavBar } from './nav-bar'
import { Footer } from './footer'
import { Join } from './registration'
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
        <Join />
        <Footer />
      </div>
    )
  }
}
