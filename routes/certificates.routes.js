const controller = require('../controllers/certificates.controller')

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    )
    next()
  })
  // create project
  app.post('/api/certificates', controller.createCertificate)

  // get all projects
  app.get('/api/certificates', controller.getCertificate)

  // get a todo
  app.get('/api/certificates/:id', controller.getCertificateById)

  // update a project
  app.put('/api/certificates/:id', controller.updateCertificate)

  // delete a project
  app.delete('/api/certificates/:id', controller.deleteCertificate)
}
