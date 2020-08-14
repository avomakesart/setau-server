const teamController = require('../controllers/team/team.controller')
const memberController = require('../controllers/team/member.controller')

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    )
    next()
  })

  // create project
  app.post('/api/team_section', teamController.createTeamSection)

  // get all projects
  app.get('/api/team_section', teamController.getSection)

  // get a todo
  app.get('/api/team_section/:id', teamController.getSectionById)

  // update a project
  app.put('/api/team_section/:id', teamController.updateSection)

  // delete a project
  app.delete('/api/team_section/:id', teamController.deleteSection)

  // Create Icons
  app.post('/api/team_member', memberController.createMember)

  // get all projects
  app.get('/api/team_member', memberController.getMember)

  // get a todo
  app.get('/api/team_member/:id', memberController.getMemberById)

  // update a project
  app.put('/api/team_member/:id', memberController.updateMember)

  // delete a project
  app.delete('/api/team_member/:id', memberController.deleteMember)
}
