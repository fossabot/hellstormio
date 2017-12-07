import * as express from 'express'
const router = express.Router()

import { connection } from '../database/connect'

/* POST tag listing. */
router.post('/', function (req, res, next) {
  const sql = 'INSERT INTO tag (id, name) VALUES ?'
  const values = [
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
    ['Betty', 'Green Grass 1'],
    ['Richard', 'Sky st 331'],
    ['Susan', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989'],
    ['Viola', 'Sideway 1633'],
  ]
  connection.query(sql, [values], function (error, results) {
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
