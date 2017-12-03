import * as React from 'react'
import { Route } from 'react-router-dom'

export class Routers {
  public routers = () => {
    <div>
      <Route path='/login' component={this.topicsComponent} />
    </div>
  }

  public topicsComponent = () => (
    <div>
      Topics
    </div>
  )
}
