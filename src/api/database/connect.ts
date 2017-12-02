import * as mysql from 'mysql'

export const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'hellstorm_test'
})
