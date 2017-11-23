'use strict'

const common = require('./webpack.loader')

const webpack = require('webpack')
const merge = require('webpack-merge')

const mainConfig = merge({}, common.main)
const adminConfig = merge({}, common.admin)

module.exports = [
  mainConfig,
  adminConfig,
]
