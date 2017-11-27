const mysql = require('mysql')

export const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'hellstorm_test'
})

connection.connect(function(err: any) {
  if (err) {
    console.error('error connection: ' + err.stack)
    return
  }

  console.log('connected as id ' + connection.threadId)
})
