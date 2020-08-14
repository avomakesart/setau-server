const sectionController = require('../controllers/client-section/client-section.controller')
const clientController = require('../controllers/client-section/client.controller')

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    )
    next()
  })

  // create project
  app.post('/api/client_section', sectionController.createClientSection)

  // get all projects
  app.get('/api/client_section', sectionController.getClientSection)

  // get a todo
  app.get('/api/client_section/:id', sectionController.getSectionById)

  // update a project
  app.put('/api/client_section/:id', sectionController.updateSection)

  // delete a project
  app.delete('/api/client_section/:id', sectionController.deleteSection)

  
  // Create Icons
  app.post('/api/client', clientController.createClient)

  // get all projects
  app.get('/api/client', clientController.getClients)

  // get a todo
  app.get('/api/client/:id', clientController.getClientById)

  // update a project
  app.put('/api/client/:id', clientController.updateClient)

  // delete a project
  app.delete('/api/client/:id', clientController.deleteClient)
}
