const controller = require('../controllers/user-info/user-info.controller')

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    )
    next()
  })

  // get all users
  app.get('/api/user_info', controller.getUsers)

  // get a user
  app.get('/api/user_info/:id', controller.getUsersById)

  // update a user
  app.put('/api/user_info/:id', controller.updateInfo)
}
