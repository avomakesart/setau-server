module.exports = {
  HOST: 'ec2-54-172-173-58.compute-1.amazonaws.com',
  USER: 'zswzzvbafihehh',
  PASSWORD: '1f9edd32e8ebbc872b5398eda2f2808040c7477d97e95052e6461947fbb5bd54',
  DB: 'd3m3reom5eodi8',
  PORT: 5432,
  dialect: 'postgresql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
}
