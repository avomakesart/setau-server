const pool = require('../config/projects.config')

exports.createTech = async (req, res) => {
  try {
    const { name, image } = req.body

    const tech = [name, image ]

    const newEntry = await pool.query(
      'INSERT INTO technologies (name, image) VALUES (?)',
      [tech]
    )

    res.json(newEntry)
  } catch (err) {
    console.log(err.message)
  }
}

// get all projects
exports.getTech = async (req, res) => {
  try {
    const newEntry = await pool.query('SELECT * FROM technologies')
    res.json(newEntry)
  } catch (err) {
    console.log(err.message)
  }
}

// get a todo
exports.getTechById = async (req, res) => {
  try {
    const { id } = req.params
    const tech = await pool.query(
      'SELECT * FROM technologies WHERE id = ?',
      [id]
    )

    res.json(tech)
  } catch (err) {
    console.log(err.message)
  }
}

// update a project
exports.updateTech = async (req, res) => {
  try {
    const { id } = req.params
    const { name, image } = req.body

    let techName = 'UPDATE technologies SET name = ? WHERE id = ?'

    let techImage = 'UPDATE technologies SET image = ? WHERE id = ?'

    await pool.query(
        techName,

      [name, id]
    )

    await pool.query(
      techImage,

      [image, id]
    )

    res.json('Technologie Info was updated')
  } catch (err) {
    console.log(err.message)
  }
}

exports.deleteTech = async (req, res) => {
  try {
    const { id } = req.params
    await pool.query('DELETE FROM technologies WHERE id = ?', [id])
    res.json('Technologie Info was updated')
  } catch (err) {
    console.log(err.message)
  }
}
