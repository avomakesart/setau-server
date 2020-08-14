const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

// const corsOptions = {
//   origin: 'http://localhost:8200',
// }

// Middleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Routes

const db = require('./models')
const Role = db.role

// db.sequelize.sync({ force: true }).then(() => {
//   console.log('Drop and Resync Db')
//   initial()
// })

function initial() {
  Role.create({
    id: 1,
    name: 'user',
  })

  Role.create({
    id: 2,
    name: 'moderator',
  })

  Role.create({
    id: 3,
    name: 'admin',
  })
}

// Homepage routes
require('./routes/homepage.routes')(app)

// About routes
require('./routes/about.routes')(app)

// Company values routes
require('./routes/values.routes')(app)

// Team members routes
require('./routes/team.routes')(app)

// Clients routes
require('./routes/client.routes')(app)

// Blog routes
require('./routes/post.routes')(app)

// User routes
require('./routes/user-info.routes')(app)

// Contact routes
require('./routes/contact.routes')(app)

// Auth routes
require('./routes/auth.routes')(app)
require('./routes/user.routes')(app)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
