const controller = require('../controllers/about/about_card.controller')
const secondController = require('../controllers/about/about_second_card.controller')

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    )
    next()
  })

  // Card
  app.post('/api/about_card', controller.createCard)
  app.get('/api/about_card', controller.getCard)
  // Get card by ID
  app.get('/api/about_card/:id', controller.getCardById)
  app.put('/api/about_card/:id', controller.updateCard)
  app.delete('/api/about_card/:id', controller.deleteCard)

  // Second card
  app.post('/api/about_second_card', secondController.createCard)
  app.get('/api/about_second_card', secondController.getCard)
  // Get second card by id
  app.get('/api/about_second_card/:id', secondController.getCardById)
  app.put('/api/about_second_card/:id', secondController.updateCard)
  app.delete('/api/about_second_card/:id', secondController.deleteCard)
}
