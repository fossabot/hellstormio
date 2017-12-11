import * as express from 'express'
import { standardOutput, connection } from '../database'

const router = express.Router()

/* GET tag listing. */
router.get('/', function(req, res) {
  connection.query('SELECT * FROM `games`', function(error, results) {
    standardOutput(error, results, res)
  })
})

/* POST tag listing. */
router.post('/', function(req, res) {
  // TODO: Add About this Games
  let query =
    'INSERT INTO `games` (??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?)'
  const table = [
    `name`,
    `description`,
    `developer`,
    `publisher`,
    `cost`,
    `is_free`,
    req.body.name,
    req.body.description,
    req.body.developer,
    req.body.publisher,
    req.body.cost,
    req.body.is_free,
    new Date(),
  ]
  query = connection.format(query, table)
  connection.query(query, function(error, results) {
    standardOutput(error, results, res)
  })
})

/* PUT tag listing. */
router.put('/', function(req, res) {
  let query = 'UPDATE `games` SET ?? = ? WHERE `tag`.`id` = ?'
  const table = [`name`, req.body.name, req.body.id]
  query = connection.format(query, table)
  connection.query(query, function(error, results) {
    standardOutput(error, results, res)
  })
})

module.exports = router
