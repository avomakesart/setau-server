const controller = require('../controllers/values/values.controller')
const iconsController = require('../controllers/values/icons/icons.controller')

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    )
    next()
  })

  // Values Section
  app.post('/api/company_values', controller.createValues)
  app.get('/api/company_values', controller.getValues)
  // Get value by ID
  app.get('/api/company_values/:id', controller.getValueById)
  app.put('/api/company_values/:id', controller.updateValues)
  app.delete('/api/company_values/:id', controller.deleteValues)

  // Icons
  app.post('/api/icon_values', iconsController.createIcon)
  app.get('/api/icon_values', iconsController.getIcons)
  app.put('/api/icon_values/:id', iconsController.updateIcons)
  app.delete('/api/icon_values/:id', iconsController.deleteIcons)
}
