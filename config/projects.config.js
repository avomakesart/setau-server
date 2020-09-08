const Pool = require('pg').Pool

const pool = new Pool({
  user: 'zswzzvbafihehh',
  password: '1f9edd32e8ebbc872b5398eda2f2808040c7477d97e95052e6461947fbb5bd54',
  host: 'ec2-54-172-173-58.compute-1.amazonaws.com',
  port: 5432,
  database: 'd3m3reom5eodi8',
})

module.exports = pool
