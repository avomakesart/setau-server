const pool = require('../../config/mysql.config')

// Post cta info
exports.createCta = async (req, res) => {
  try {
    const {
      cta_title,
      cta_subtitle,
      cta_button_text,
      cta_button_color,
      cta_button_background_color,
    } = req.body

    const homeCta = [
      cta_title,
      cta_subtitle,
      cta_button_text,
      cta_button_color,
      cta_button_background_color,
    ]

    const newEntry = await pool.query(
      'INSERT INTO homepage_cta (cta_title, cta_subtitle, cta_button_text, cta_button_color, cta_button_background_color) VALUES (?)',
      [homeCta]
    )

    res.json(newEntry)
  } catch (err) {
    console.log(err.message)
  }
}

// Get the cta info
exports.getCta = async (req, res) => {
  try {
    const newEntry = await pool.query('SELECT * FROM homepage_cta')
    res.json(newEntry)
  } catch (err) {
    console.log(err.message)
  }
}

// Get the cta info by id
exports.getCtaById = async (req, res) => {
  try {
    const { id } = req.params
    const ctaHome = await pool.query(
      'SELECT * FROM homepage_cta WHERE id = ?',
      [id]
    )

    res.json(ctaHome)
  } catch (err) {
    console.log(err.message)
  }
}

// Update cta
exports.updateCta = async (req, res) => {
  try {
    const { id } = req.params
    const {
      cta_title,
      cta_subtitle,
      cta_button_text,
      cta_button_color,
      cta_button_background_color,
    } = req.body

    let ctaTitle = 'UPDATE homepage_cta SET cta_title = ? WHERE id = ?'

    let ctaSubtitle = 'UPDATE homepage_cta SET cta_subtitle = ? WHERE id = ?'

    let ctaTextButton =
      'UPDATE homepage_cta SET cta_button_text = ? WHERE id = ?'

    let ctaColorButton =
      'UPDATE homepage_cta SET cta_button_color = ? WHERE id = ?'

    let ctaBackgroundColorButton =
      'UPDATE homepage_cta SET cta_button_background_color = ? WHERE id = ?'

    await pool.query(
      ctaTitle,

      [cta_title, id]
    )

    await pool.query(
      ctaSubtitle,

      [cta_subtitle, id]
    )

    await pool.query(
      ctaTextButton,

      [cta_button_text, id]
    )

    await pool.query(
      ctaColorButton,

      [cta_button_color, id]
    )

    await pool.query(
      ctaBackgroundColorButton,

      [cta_button_background_color, id]
    )

    res.json('Cta has been updated')
  } catch (err) {
    console.log(err.message)
  }
}

// Delete cta
exports.deleteCta = async (req, res) => {
  try {
    const { id } = req.params
    await pool.query('DELETE FROM homepage_cta WHERE id = ?', [id])
    res.json('Cta Info has been deleted')
  } catch (err) {
    console.log(err.message)
  }
}
