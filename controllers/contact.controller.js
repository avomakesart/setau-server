const pool = require('../config/projects.config')

exports.createContactInfo = async (req, res) => {
  try {
    const { type, link, info } = req.body

    const contactInfo = [type, link, info]

    const newEntry = await pool.query(
      'INSERT INTO contact (type, link, info) VALUES (?)',
      [contactInfo]
    )

    res.json(newEntry)
  } catch (err) {
    console.log(err.message)
  }
}

// get all projects
exports.getContactInfo = async (req, res) => {
  try {
    const newEntry = await pool.query('SELECT * FROM contact')
    res.json(newEntry)
  } catch (err) {
    console.log(err.message)
  }
}

// get a todo
exports.getContactInfoById = async (req, res) => {
  try {
    const { id } = req.params
    const contact = await pool.query(
      'SELECT * FROM contact WHERE id = ?',
      [id]
    )

    res.json(contact)
  } catch (err) {
    console.log(err.message)
  }
}

// update a project
exports.updateContactInfo = async (req, res) => {
  try {
    const { id } = req.params
    const { type, link, info } = req.body

    let typeContact = 'UPDATE contact SET type = ? WHERE id = ?'

    let linkContact = 'UPDATE contact SET  link = ? WHERE id = ?'

    let infoContact = 'UPDATE contact SET  info = ? WHERE id = ?'


    await pool.query(
      typeContact,

      [type, id]
    )

    await pool.query(
      linkContact,

      [link, id]
    )

    await pool.query(
      infoContact,

      [info, id]
    )

    res.json('Contact Info was updated')
  } catch (err) {
    console.log(err.message)
  }
}

exports.deleteContactInfo = async (req, res) => {
  try {
    const { id } = req.params
    await pool.query('DELETE FROM contact WHERE id = ?', [id])
    res.json('Contact Info was updated')
  } catch (err) {
    console.log(err.message)
  }
}
