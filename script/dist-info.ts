import * as path from 'path'

const projectRoot = path.join(__dirname, '..')
const appPackage = require(path.join(projectRoot, 'package.json'))

export function getName() {
  return appPackage.name
}

export function getCompanyName() {
  return appPackage.companyName
}

export function getVersion() {
  return appPackage.version
}
