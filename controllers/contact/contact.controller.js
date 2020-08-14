const pool = require('../../config/mysql.config')

// Post contact form
exports.createContactMessage = async (req, res) => {
  try {
    const { name, lastname, email, subject, message } = req.body

    const values = [name, lastname, email, subject, message]

    const newEntry = await pool.query(
      'INSERT INTO contact (name, lastname, email, subject, message) VALUES(?)',
      [values]
    )

    res.json(newEntry)
  } catch (err) {
    console.log(err.message)
  }
}

// Get all messages
exports.getContactMessage = async (req, res) => {
  try {
    const newEntry = await pool.query('SELECT * FROM contact')
    res.json(newEntry)
  } catch (err) {
    console.log(err.message)
  }
}

// Get a message by id
exports.getContactMessageById = async (req, res) => {
  try {
    const { id } = req.params
    const values = await pool.query('SELECT * FROM contact WHERE id = ?', [id])

    res.json(values)
  } catch (err) {
    console.log(err.message)
  }
}

// Delete contact message
exports.deleteContactMessage = async (req, res) => {
  try {
    const { id } = req.params
    await pool.query('DELETE FROM contact WHERE id = ?', [id])
    res.json('Contact message has been deleted')
  } catch (err) {
    console.log(err.message)
  }
}
