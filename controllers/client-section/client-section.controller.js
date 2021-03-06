const pool = require('../../config/mysql.config')

// Post client section
exports.createClientSection = async (req, res) => {
  try {
    const { section_title, section_subtitle, section_description } = req.body

    const values = [section_title, section_subtitle, section_description]

    const newEntry = await pool.query(
      'INSERT INTO client_section (section_title, section_subtitle, section_description) VALUES (?)',
      [values]
    )

    res.json(newEntry)
  } catch (err) {
    console.log(err.message)
  }
}

// Get client section
exports.getClientSection = async (req, res) => {
  try {
    const newEntry = await pool.query('SELECT * FROM client_section')
    res.json(newEntry)
  } catch (err) {
    console.log(err.message)
  }
}

// Get client section by id
exports.getSectionById = async (req, res) => {
  try {
    const { id } = req.params
    const values = await pool.query(
      'SELECT * FROM client_section WHERE id = ?',
      [id]
    )

    res.json(values)
  } catch (err) {
    console.log(err.message)
  }
}

// Update client section
exports.updateSection = async (req, res) => {
  try {
    const { id } = req.params
    const { section_title, section_subtitle, section_description } = req.body

    let sectionTitle =
      'UPDATE client_section SET section_title = ? WHERE id = ?'

    let sectionSubtitle =
      'UPDATE client_section SET section_subtitle = ? WHERE id = ?'

    let sectionDescription =
      'UPDATE client_section SET section_description = ? WHERE id = ?'

    await pool.query(
      sectionTitle,

      [section_title, id]
    )

    await pool.query(
      sectionSubtitle,

      [section_subtitle, id]
    )

    await pool.query(
      sectionDescription,

      [section_description, id]
    )

    res.json('Client section values has been updated')
  } catch (err) {
    console.log(err.message)
  }
}

// Delete client section
exports.deleteSection = async (req, res) => {
  try {
    const { id } = req.params
    await pool.query('DELETE FROM client_section WHERE id = ?', [id])
    res.json('Client section has been deleted')
  } catch (err) {
    console.log(err.message)
  }
}
