import { User } from '../models/user'

/** All of the shared app state. */
export interface IAppState {
  readonly users: ReadonlyArray<User>
}
