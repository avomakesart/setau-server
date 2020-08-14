module.exports = {
  HOST: 'localhost',
  USER: 'alvarocastillocorrea',
  PASSWORD: 'Cosmosblue2508',
  DB: 'setau',
  PORT: 5432,
  dialect: 'postgresql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
}
