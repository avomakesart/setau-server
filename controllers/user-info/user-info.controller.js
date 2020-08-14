const pool = require('../../config/projects.config')
const bcrypt = require('bcryptjs')


// Get user info
exports.getUsers = async (req, res) => {
  try {
    const newEntry = await pool.query('SELECT * FROM users')
    res.json(newEntry.rows)
  } catch (err) {
    console.log(err.message)
  }
}

// Get user info by id
exports.getUsersById = async (req, res) => {
  try {
    const { id } = req.params
    const values = await pool.query('SELECT * FROM users WHERE id = $1', [id])

    res.json(values.rows)
  } catch (err) {
    console.log(err.message)
  }
}

// Update user info
exports.updateInfo = async (req, res) => {
  try {
    const { id } = req.params
    const { fullname, username, email } = req.body

    let userName = 'UPDATE users SET fullname = $1 WHERE id = $2'

    let userNickName = 'UPDATE users SET username = $1 WHERE id = $2'

    let userEmail = 'UPDATE users SET email = $1 WHERE id = $2'

    let userPass = 'UPDATE users SET password = $1 WHERE id = $2'


    await pool.query(
      userName,

      [fullname, id]
    )

    await pool.query(
      userNickName,

      [username, id]
    )

    await pool.query(
      userEmail,

      [email, id]
    )

    await pool.query(
      userPass,

      [bcrypt.hashSync(req.body.password, 8), id]
    )

    res.json('All the user info has been updated')
  } catch (err) {
    console.log(err.message)
  }
}

