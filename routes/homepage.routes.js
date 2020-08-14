const controller = require('../controllers/homepage/homepage_hero.controller')
const testimonialSectionController = require('../controllers/homepage/testimonial_section.controller')
const testimonialController = require('../controllers/homepage/testimonials.controller')
const ctaController = require('../controllers/homepage/cta.controller')
const homepageCardController = require('../controllers/homepage/homepage_card.controller')
const homepageSecondCardController = require('../controllers/homepage/homepage_second_card.controller')
const homepageThirdCardController = require('../controllers/homepage/homepage_third_card.controller')

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    )
    next()
  })

  /// Homepage hero
  app.post('/api/homepage_hero', controller.createHomepage)
  app.get('/api/homepage_hero', controller.getHomepage)
  app.get('/api/homepage_hero/:id', controller.getHomepageById)
  app.put('/api/homepage_hero/:id', controller.updateHomepageInfo)
  app.delete('/api/homepage_hero/:id', controller.deleteHomepageContent)

  /// Testimonial section
  app.post(
    '/api/testimonial_section',
    testimonialSectionController.createTestimonialSection
  )
  app.get(
    '/api/testimonial_section',
    testimonialSectionController.getTestimonials
  )
  app.get(
    '/api/testimonial_section/:id',
    testimonialSectionController.getTestimonialById
  )
  app.put(
    '/api/testimonial_section/:id',
    testimonialSectionController.updateTestimonial
  )
  app.delete(
    '/api/testimonial_section/:id',
    testimonialSectionController.deleteTestimonial
  )

  /// Testimonials
  app.post('/api/testimonials', testimonialController.createTestimonial)
  app.get('/api/testimonials', testimonialController.getTestimonials)
  app.get('/api/testimonials/:id', testimonialController.getTestimonialById)
  app.put('/api/testimonials/:id', testimonialController.updateTestimonial)
  app.delete('/api/testimonials/:id', testimonialController.deleteTestimonial)

  /// CTA
  app.post('/api/homepage_cta', ctaController.createCta)
  app.get('/api/homepage_cta', ctaController.getCta)
  app.get('/api/homepage_cta/:id', ctaController.getCtaById)
  app.put('/api/homepage_cta/:id', ctaController.updateCta)
  app.delete('/api/homepage_cta/:id', ctaController.deleteCta)

  /// Homepage Card
  app.post('/api/home_card', homepageCardController.createCard)
  app.get('/api/home_card', homepageCardController.getCard)
  app.get('/api/home_card/:id', homepageCardController.getCardById)
  app.put('/api/home_card/:id', homepageCardController.updateCard)
  app.delete('/api/home_card/:id', homepageCardController.deleteCard)

  /// Homepage Second Card

  // create cta
  app.post('/api/home_second_card', homepageSecondCardController.createCard)
  app.get('/api/home_second_card', homepageSecondCardController.getCard)
  app.get('/api/home_second_card/:id', homepageSecondCardController.getCardById)
  app.put('/api/home_second_card/:id', homepageSecondCardController.updateCard)
  app.delete(
    '/api/home_second_card/:id',
    homepageSecondCardController.deleteCard
  )

  /// Homepage Third Card
  app.post('/api/home_third_card', homepageThirdCardController.createCard)
  app.get('/api/home_third_card', homepageThirdCardController.getCard)
  app.get('/api/home_third_card/:id', homepageThirdCardController.getCardById)
  app.put('/api/home_third_card/:id', homepageThirdCardController.updateCard)
  app.delete('/api/home_third_card/:id', homepageThirdCardController.deleteCard)
}
