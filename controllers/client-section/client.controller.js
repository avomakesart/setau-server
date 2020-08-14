const pool = require('../../config/mysql.config')

// Post client image
exports.createClient = async (req, res) => {
  try {
    const { client_image } = req.body

    const values = [client_image]

    const newEntry = await pool.query(
      'INSERT INTO client_list (client_image) VALUES (?)',
      [values]
    )

    res.json(newEntry)
  } catch (err) {
    console.log(err.message)
  }
}

// Get all client images
exports.getClients = async (req, res) => {
  try {
    const newEntry = await pool.query('SELECT * FROM client_list')
    res.json(newEntry)
  } catch (err) {
    console.log(err.message)
  }
}

// Get client image by id
exports.getClientById = async (req, res) => {
  try {
    const { id } = req.params
    const values = await pool.query(
      'SELECT * FROM client_image WHERE id = ?',
      [id]
    )

    res.json(values)
  } catch (err) {
    console.log(err.message)
  }
}

// Update a client image
exports.updateClient = async (req, res) => {
  try {
    const { id } = req.params
    const { client_image } = req.body

    let clientImage = 'UPDATE client_list SET client_image = ? WHERE id = ?'

    await pool.query(
      clientImage,

      [client_image, id]
    )

    res.json('Client image has been updated')
  } catch (err) {
    console.log(err.message)
  }
}

// Delete client image
exports.deleteClient = async (req, res) => {
  try {
    const { id } = req.params
    await pool.query('DELETE FROM client_section WHERE id = ?', [id])
    res.json('Client has been deleted')
  } catch (err) {
    console.log(err.message)
  }
}
