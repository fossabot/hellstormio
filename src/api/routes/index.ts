import * as express from 'express'
import * as moment from 'moment'
const router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    date: moment.now(),
  })
})

module.exports = router
