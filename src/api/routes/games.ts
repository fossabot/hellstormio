import * as express from 'express'
const router = express.Router()

import { connection } from '../database/connect'

/* GET users listing. */
router.get('/', function (req, res, next) {
  connection.query('SELECT * FROM games', function (error, results, fields) {
    if (error) {
      res.json({
        'status': 500,
        'error': error,
        'response': null,
      })
      // If there is error, we send the error in the error section with 500 status
    } else {
      res.json({
        'status': 200,
        'error': null,
        'response': results,
      })
      // If there is no error, all is good and response is 200OK.
    }
  })
})

module.exports = router
