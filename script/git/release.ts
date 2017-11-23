import { GitProcess } from 'peagit'
import * as path from 'path'

const pathToRepository = path.resolve(__dirname)

async function status() {
  const result = await GitProcess.exec([ 'status' ], pathToRepository)
  if (result.exitCode) {
    const output = result.stdout
    console.log(output)
  } else {
    const error = result.stderr
    console.error(error)
  }
}

module.exports = {
  status
}
