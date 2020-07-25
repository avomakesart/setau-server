module.exports = {
  HOST: 'us-cdbr-east-02.cleardb.com',
  USER: 'b89c22dbd1a04f',
  PASSWORD: 'cfd8671d',
  DB: 'heroku_38e43dd30660a24',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
}
