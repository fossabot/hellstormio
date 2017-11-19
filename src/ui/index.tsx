import * as React from 'react'
import * as ReactDOM from 'react-dom'

interface IAppProps {
  readonly name: string
}

class App extends React.Component<IAppProps> {
  public render() {
    return (
      <div>Hello {this.props.name}</div>
    )
  }
}

ReactDOM.render(
  <App name='Hashimoto'/>,
  document.getElementById('root')
)
