const controller = require('../controllers/tools.controller')

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    )
    next()
  })
  // create project
  app.post('/api/tools', controller.createTool)

  // get all projects
  app.get('/api/tools', controller.getTool)

  // get a todo
  app.get('/api/tools/:id', controller.getToolById)

  // update a project
  app.put('/api/tools/:id', controller.updateContactInfo)

  // delete a project
  app.delete('/api/tools/:id', controller.deleteTool)
}
