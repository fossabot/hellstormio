import * as React from 'react'
import { NavBar } from './nav-bar'
import { Routers } from './routes'

interface IAppProps {
  readonly routes: Routers
}

export class App extends React.Component<IAppProps> {
  public render() {
    return <NavBar routers={this.props.routes} />
  }
}
