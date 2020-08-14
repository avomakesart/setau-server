const controller = require('../controllers/contact/contact.controller')

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    )
    next()
  })

  // Contact routes
  app.post('/api/contact_message', controller.createContactMessage)
  app.get('/api/contact_message', controller.getContactMessage)
  app.get('/api/contact_message/:id', controller.getContactMessageById)
  app.delete('/api/contact_message/:id', controller.deleteContactMessage)
}
