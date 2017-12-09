import * as express from 'express'
import { standardOutput, connection } from '../database'

const router = express.Router()

/* GET tag listing. */
router.get('/', function (req, res) {
  connection.query('SELECT * FROM `users`', function (error, results) {
    standardOutput(error, results, res)
  })
})

router.get('/:id', function (req, res) {
  // SELECT * FROM `users` WHERE `id` = 1
  let query = 'SELECT * FROM `users` WHERE `id` = ?'
  const table = [req.body.id]
  query = connection.format(query, table)
  connection.query(query, function (error, results) {
    standardOutput(error, results, res)
  })
})

/* POST tag listing. */
router.post('/', function (req, res) {
  // INSERT INTO`users`(`username`, `email`, `password`, `join_date`) VALUES('3143141', '415151', '515151', '2017-12-07');
  let query = 'INSERT INTO `users` (??,??,??,??) VALUES (?,?,?,?)'
  const table = ['username', 'email', 'password', 'join_date', req.body.username, req.body.email, req.body.password, new Date()]
  query = connection.format(query, table)
  connection.query(query, function (error, results) {
    standardOutput(error, results, res)
  })
})

module.exports = router
