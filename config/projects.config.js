const Pool = require('pg').Pool

const pool = new Pool({
  user: 'alvarocastillocorrea',
  password: 'Cosmosblue2508',
  host: 'localhost',
  port: 5432,
  database: 'setau',
})

module.exports = pool
