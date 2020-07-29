const pool = require('../config/projects.config')

exports.createTool = async (req, res) => {
  try {
    const { name, image } = req.body

    const tool = [name, image ]

    const newEntry = await pool.query(
      'INSERT INTO tools (name, image) VALUES (?)',
      [tool]
    )

    res.json(newEntry)
  } catch (err) {
    console.log(err.message)
  }
}

// get all projects
exports.getTool = async (req, res) => {
  try {
    const newEntry = await pool.query('SELECT * FROM tools')
    res.json(newEntry)
  } catch (err) {
    console.log(err.message)
  }
}

// get a todo
exports.getToolById = async (req, res) => {
  try {
    const { id } = req.params
    const tool = await pool.query(
      'SELECT * FROM tools WHERE id = ?',
      [id]
    )

    res.json(tool)
  } catch (err) {
    console.log(err.message)
  }
}

// update a project
exports.updateContactInfo = async (req, res) => {
  try {
    const { id } = req.params
    const { name, image } = req.body

    let toolName = 'UPDATE tools SET name = ? WHERE id = ?'

    let toolImage = 'UPDATE tools SET image = ? WHERE id = ?'

    await pool.query(
        toolName,

      [name, id]
    )

    await pool.query(
      toolImage,

      [image, id]
    )

    res.json('Tool Info was updated')
  } catch (err) {
    console.log(err.message)
  }
}

exports.deleteTool = async (req, res) => {
  try {
    const { id } = req.params
    await pool.query('DELETE FROM tools WHERE id = ?', [id])
    res.json('Tools Info was updated')
  } catch (err) {
    console.log(err.message)
  }
}
