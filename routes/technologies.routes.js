const controller = require('../controllers/technologies.controller')

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    )
    next()
  })
  // create project
  app.post('/api/technologies', controller.createTech)

  // get all projects
  app.get('/api/technologies', controller.getTech)

  // get a todo
  app.get('/api/technologies/:id', controller.getTechById)

  // update a project
  app.put('/api/technologies/:id', controller.updateTech)

  // delete a project
  app.delete('/api/technologies/:id', controller.deleteTech)
}
