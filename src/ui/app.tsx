import * as React from 'react'
import { NavBar } from './nav-bar'
import { Routers } from './routes'
import { Footer } from './footer'

interface IAppProps {
  readonly routes: Routers
}

export class App extends React.Component<IAppProps> {
  public render() {
    return (
      <div id='root'>
        <NavBar routers={this.props.routes} />
        <Footer />
      </div>
    )
  }
}
