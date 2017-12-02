import * as React from 'react'
import { NavBar } from './nav-bar'

interface IAppState {
  readonly message: string
}

export class App extends React.Component<{}, IAppState> {

  public constructor(props: any) {
    super(props)

    this.state = {
      message: ''
    }
  }

  public render() {
    return(
      <div id='root'>
        <p>API message {this.state.message}</p>
        <NavBar />
      </div>
    )
  }

  public componentDidMount() {
    return fetch('http://localhost:9223')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          message: responseJson.message
        })
      })
  }
}
