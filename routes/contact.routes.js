const controller = require('../controllers/contact.controller')

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    )
    next()
  })
  // create project
  app.post('/api/contact', controller.createContactInfo)

  // get all projects
  app.get('/api/contact', controller.getContactInfo)

  // get a todo
  app.get('/api/contact/:id', controller.getContactInfoById)

  // update a project
  app.put('/api/contact/:id', controller.updateContactInfo)

  // delete a project
  app.delete('/api/contact/:id', controller.deleteContactInfo)
}
