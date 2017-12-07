import * as express from 'express'
import { standardOutput, connection } from '../database'

const router = express.Router()

/* GET tag listing. */
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

/* PUT tag listing. */
router.put('/', function (req, res) {
  let query = 'UPDATE `tag` SET ?? = ? WHERE `tag`.`id` = ?'
  const table = [`name`, req.body.name, req.body.id]
  query = connection.format(query, table)
  connection.query(query, function (error, results) {
    standardOutput(error, results, res)
  })
})

module.exports = router
