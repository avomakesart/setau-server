const controller = require('../controllers/projects.controller')

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    )
    next()
  })
  // create project
  app.post('/api/projects', controller.createProject)

  // get all projects
  app.get('/api/projects', controller.getProjects)

  // get a todo
  app.get('/api/projects/:id', controller.getProjectsById)

  // update a project
  app.put('/api/projects/:id', controller.updateProject)

  // delete a todo
  app.delete('/api/projects/:id', controller.deleteProject)
}
