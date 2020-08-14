const pool = require('../../config/mysql.config')

// Post hero
exports.createHomepage = async (req, res) => {
  try {
    const {
      hero_button_color,
      hero_button_background_color,
      hero_button_text,
      hero_subtitle,
      hero_title,
      hero_image,
    } = req.body

    const homepageHero = [
      hero_button_color,
      hero_button_background_color,
      hero_button_text,
      hero_subtitle,
      hero_title,
      hero_image,
    ]

    const newEntry = await pool.query(
      'INSERT INTO homepage_hero (hero_button_color, hero_button_background_color, hero_button_text, hero_subtitle, hero_title, hero_image) VALUES (?)',
      [homepageHero]
    )

    res.json(newEntry)
  } catch (err) {
    console.log(err.message)
  }
}

// Get hero
exports.getHomepage = async (req, res) => {
  try {
    const newEntry = await pool.query('SELECT * FROM homepage_hero')
    res.json(newEntry)
  } catch (err) {
    console.log(err.message)
  }
}

// Get hero by id
exports.getHomepageById = async (req, res) => {
  try {
    const { id } = req.params
    const homepageHero = await pool.query(
      'SELECT * FROM homepage_hero WHERE id = ?',
      [id]
    )

    res.json(homepageHero)
  } catch (err) {
    console.log(err.message)
  }
}

// Update hero
exports.updateHomepageInfo = async (req, res) => {
  try {
    const { id } = req.params
    const {
      hero_button_color,
      hero_button_background_color,
      hero_button_text,
      hero_subtitle,
      hero_title,
      hero_image,
    } = req.body

    let heroButtonColor =
      'UPDATE homepage_hero SET hero_button_color = ?WHERE id = ?'

    let heroButtonBackgroundColor =
      'UPDATE homepage_hero SET hero_button_background_color = ?WHERE id = ?'

    let heroButtonText =
      'UPDATE homepage_hero SET hero_button_text = ? WHERE id = ?'

    let heroSubtitle = 'UPDATE homepage_hero SET hero_subtitle = ? WHERE id = ?'

    let heroTitle = 'UPDATE homepage_hero SET hero_title = ? WHERE id = ?'

    let heroImage = 'UPDATE homepage_hero SET hero_image = ? WHERE id = ?'

    await pool.query(
      heroButtonColor,

      [hero_button_color, id]
    )

    await pool.query(
      heroButtonBackgroundColor,

      [hero_button_background_color, id]
    )

    await pool.query(
      heroButtonText,

      [hero_button_text, id]
    )

    await pool.query(
      heroSubtitle,

      [hero_subtitle, id]
    )

    await pool.query(
      heroTitle,

      [hero_title, id]
    )

    await pool.query(
      heroImage,

      [hero_image, id]
    )

    res.json('Homepage has been updated')
  } catch (err) {
    console.log(err.message)
  }
}

exports.deleteHomepageContent = async (req, res) => {
  try {
    const { id } = req.params
    await pool.query('DELETE FROM homepage_hero WHERE id = ?', [id])
    res.json('Hero Info has been deleted')
  } catch (err) {
    console.log(err.message)
  }
}
