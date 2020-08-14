const pool = require('../../../config/mysql.config')

// Post first icon
exports.createIcon = async (req, res) => {
  try {
    const { icon_image, icon_title, icon_description } = req.body

    const icons = [
      icon_image, icon_title, icon_description
    ]

    const newEntry = await pool.query(
      'INSERT INTO icon_values (icon_image, icon_title, icon_description) VALUES(?)',
      [icons]
    )

    res.json(newEntry)
  } catch (err) {
    console.log(err.message)
  }
}

// Get first icon
exports.getIcons = async (req, res) => {
  try {
    const newEntry = await pool.query('SELECT * FROM icon_values')
    res.json(newEntry)
  } catch (err) {
    console.log(err.message)
  }
}

// Update first icon
exports.updateIcons = async (req, res) => {
  try {
    const { id } = req.params
    const { icon_image, icon_title, icon_description } = req.body

    const iconImg = icon_image
    const iconTitle = icon_title
    const iconDesc = icon_description

    let updateIconImage =
      'UPDATE icon_values SET icon_image = ? WHERE id = ?'

    let updateIconTitle =
      'UPDATE icon_values SET icon_title = ? WHERE id = ?'

    let updateIconDesc =
      'UPDATE icon_values SET icon_description = ? WHERE id = ?'

    await pool.query(
      updateIconImage,

      [iconImg, id]
    )

    await pool.query(
      updateIconTitle,

      [iconTitle, id]
    )

    await pool.query(
      updateIconDesc,

      [iconDesc, id]
    )

    res.json('Company values first icons has been updated')
  } catch (err) {
    console.log(err.message)
  }
}

// Delete first icon
exports.deleteIcons = async (req, res) => {
  try {
    const { id } = req.params
    await pool.query('DELETE FROM icon_values WHERE id = ?', [id])
    res.json('Company icon has been deleted')
  } catch (err) {
    console.log(err.message)
  }
}