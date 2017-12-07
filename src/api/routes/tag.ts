import * as express from 'express'
const router = express.Router()
import { standardOutput, connection } from '../database'

router.get('/', function (req, res) {
  connection.query('SELECT * FROM `tag`', function (error, results) {
    standardOutput(error, results, res)
  })
})

/* POST tag listing. */
router.post('/', function (req, res) {
  let query = 'INSERT INTO `tag` (??) VALUES (?)'
  const table = [`name`, req.body.name]
  query = connection.format(query, table)
  connection.query(query, function (error, results) {
    standardOutput(error, results, res)
  })
})

router.put('/', function (req, res) {
  connection.query('UPDATE `tag` SET `name`=?, where `id`=?', [req.body.id], function (error, results, fields) {
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
