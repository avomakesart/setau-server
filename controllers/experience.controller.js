const pool = require('../config/projects.config')

exports.createExperience = async (req, res) => {
  try {
    const { name, position, startDate, endDate } = req.body

    const experienceValues = [name, position, startDate, endDate]

    const newEntry = await pool.query(
      'INSERT INTO experience (name, position, startDate, endDate) VALUES (?)',
      [experienceValues]
    )

    res.json(newEntry)
  } catch (err) {
    console.log(err.message)
  }
}

// get all projects
exports.getExperiences = async (req, res) => {
  try {
    const newEntry = await pool.query('SELECT * FROM experience')
    res.json(newEntry)
  } catch (err) {
    console.log(err.message)
  }
}

// get a todo
exports.getExperienceById = async (req, res) => {
  try {
    const { id } = req.params
    const experience = await pool.query(
      'SELECT * FROM experience WHERE id = ?',
      [id]
    )

    res.json(experience)
  } catch (err) {
    console.log(err.message)
  }
}

// update a project
exports.updateExperience = async (req, res) => {
  try {
    const { id } = req.params
    const { name, position, startDate, endDate } = req.body

    let nameExp = 'UPDATE experience SET name = ? WHERE id = ?'

    let positionExp = 'UPDATE experience SET  position = ? WHERE id = ?'

    let startDateExp = 'UPDATE experience SET  startDate = ? WHERE id = ?'

    let endDateExp = 'UPDATE experience SET endDate = ? WHERE id = ?'

    await pool.query(
      nameExp,

      [name, id]
    )

    await pool.query(
      positionExp,

      [position, id]
    )

    await pool.query(
      startDateExp,

      [startDate, id]
    )

    await pool.query(
      endDateExp,

      [endDate, id]
    )

    res.json('Experience was updated')
  } catch (err) {
    console.log(err.message)
  }
}

exports.deleteExperience = async (req, res) => {
  try {
    const { id } = req.params
    await pool.query('DELETE FROM experience WHERE id = ?', [id])
    res.json('Experience was updated')
  } catch (err) {
    console.log(err.message)
  }
}
