// @ts-ignore
import { GitProcess, GitError, IGitExecutionOptions } from 'peagit'
import * as Path from 'path'

const repositoryPath = Path.resolve(__dirname, '..', '..')

// for readability, let's alias this
const git = GitProcess.exec

createNone(repositoryPath)

export async function createNone(path: string) {
  const result = await git(['status'], path)
  console.log(result.stdout)
  if (result.exitCode !== 0) {
    const error = GitProcess.parseError(result.stderr)
    if (error) {
      console.log(`Got error code: ${error}`)
    } else {
      console.log(`Could not parse error: ${result.stderr}`)
    }
  }
}
