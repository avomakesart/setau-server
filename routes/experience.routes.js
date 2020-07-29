const controller = require('../controllers/experience.controller')

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    )
    next()
  })
  // create project
  app.post('/api/experience', controller.createExperience)

  // get all projects
  app.get('/api/experience', controller.getExperiences)

  // get a todo
  app.get('/api/experience/:id', controller.getExperienceById)

  // update a project
  app.put('/api/experience/:id', controller.updateExperience)

  // delete a project
  app.delete('/api/experience/:id', controller.deleteExperience)
}
