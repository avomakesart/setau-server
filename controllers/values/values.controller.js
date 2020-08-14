const pool = require('../../config/mysql.config')

// Post value
exports.createValues = async (req, res) => {
  try {
    const { section_title, section_subtitle, section_description } = req.body

    const values = [section_title, section_subtitle, section_description]

    const newEntry = await pool.query(
      'INSERT INTO company_values (section_title, section_subtitle, section_description) VALUES(?)',
      [values]
    )

    res.json(newEntry)
  } catch (err) {
    console.log(err.message)
  }
}

// Get all values
exports.getValues = async (req, res) => {
  try {
    const newEntry = await pool.query('SELECT * FROM company_values')
    res.json(newEntry)
  } catch (err) {
    console.log(err.message)
  }
}

// Get a value by id
exports.getValueById = async (req, res) => {
  try {
    const { id } = req.params
    const values = await pool.query(
      'SELECT * FROM company_values WHERE id = ?',
      [id]
    )

    res.json(values)
  } catch (err) {
    console.log(err.message)
  }
}

// Update a value
exports.updateValues = async (req, res) => {
  try {
    const { id } = req.params
    const { section_title, section_subtitle, section_description } = req.body

    let sectionTitle =
      'UPDATE company_values SET section_title = ? WHERE id = ?'

    let sectionSubtitle =
      'UPDATE company_values SET section_subtitle = ? WHERE id = ?'

    let sectionDescription =
      'UPDATE company_values SET section_description = ? WHERE id = ?'

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

    res.json('Company icon values has been updated')
  } catch (err) {
    console.log(err.message)
  }
}

// Delete a value
exports.deleteValues = async (req, res) => {
  try {
    const { id } = req.params
    await pool.query('DELETE FROM company_values WHERE id = ?', [id])
    res.json('Company values has been deleted')
  } catch (err) {
    console.log(err.message)
  }
}
