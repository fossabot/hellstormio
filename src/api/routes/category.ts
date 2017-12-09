import * as express from 'express'
import { standardOutput, connection } from '../database'

const router = express.Router()

/* GET category listing. */
router.get('/', function (req, res) {
  connection.query('SELECT * FROM `category`', function (error, results) {
    standardOutput(error, results, res)
  })
})

/* POST category listing. */
router.post('/', function (req, res) {
  let query = 'INSERT INTO `category` (??, ??) VALUES (?, ?)'
  const table = [`name`, `game_count`, req.body.name, req.body.game_count]
  query = connection.format(query, table)
  connection.query(query, function (error, results) {
    standardOutput(error, results, res)
  })
})

/* PUT category listing. */
router.put('/', function (req, res) {
  let query = 'UPDATE `category` SET ?? = ? WHERE `category`.`id` = ?'
  const table = [`name`, req.body.name, req.body.id]
  query = connection.format(query, table)
  connection.query(query, function (error, results) {
    standardOutput(error, results, res)
  })
})

module.exports = router
