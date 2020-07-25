const controller = require('../controllers/personal_projects.controller')

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    )
    next()
  })
  // create project
  app.post('/api/personal_projects', controller.createPersonalProject)

  // get all projects
  app.get('/api/personal_projects', controller.getPersonalProjects)

  // get a todo
  app.get('/api/personal_projects/:id', controller.getPersonalProjectsById)

  // update a project
  app.put('/api/personal_projects/:id', controller.updatePersonalProject)

  // delete a project
  app.delete('/api/personal_projects/:id', controller.deletePersonalProject)
}
