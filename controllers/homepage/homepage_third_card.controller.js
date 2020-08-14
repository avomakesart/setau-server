const pool = require('../../config/mysql.config')

// Post card
exports.createCard = async (req, res) => {
  try {
    const {
      homepage_card_title,
      homepage_card_desc,
      homepage_card_button_text,
      homepage_card_button_color,
      homepage_card_button_background_color,
    } = req.body

    const homeCard = [
      homepage_card_title,
      homepage_card_desc,
      homepage_card_button_text,
      homepage_card_button_color,
      homepage_card_button_background_color,
    ]

    const newEntry = await pool.query(
      'INSERT INTO homepage_third_card (homepage_card_title, homepage_card_desc, homepage_card_button_text, homepage_card_button_color, homepage_card_button_background_color) VALUES (?)',
      [homeCard]
    )

    res.json(newEntry)
  } catch (err) {
    console.log(err.message)
  }
}

// Get a card
exports.getCard = async (req, res) => {
  try {
    const newEntry = await pool.query('SELECT * FROM homepage_third_card')
    res.json(newEntry)
  } catch (err) {
    console.log(err.message)
  }
}

// Get a card by id
exports.getCardById = async (req, res) => {
  try {
    const { id } = req.params
    const homeCard = await pool.query(
      'SELECT * FROM homepage_third_card WHERE id = ?',
      [id]
    )

    res.json(homeCard)
  } catch (err) {
    console.log(err.message)
  }
}

// Update a card
exports.updateCard = async (req, res) => {
  try {
    const { id } = req.params
    const {
      homepage_card_title,
      homepage_card_desc,
      homepage_card_button_text,
      homepage_card_button_color,
      homepage_card_button_background_color,
    } = req.body

    let homeCardTitle =
      'UPDATE homepage_third_card SET homepage_card_title = ? WHERE id = ?'

    let homeCardDesc =
      'UPDATE homepage_third_card SET homepage_card_desc = ? WHERE id = ?'

    let homeCardButtonText =
      'UPDATE homepage_third_card SET homepage_card_button_text = ? WHERE id = ?'

    let homeCardButtonColor =
      'UPDATE homepage_third_card SET homepage_card_button_color = ? WHERE id = ?'

    let homeCardButtonBackgroundColor =
      'UPDATE homepage_third_card SET homepage_card_button_background_color = ? WHERE id = ?'

    let homeCardImg = 'UPDATE homepage_third_card SET  = ? WHERE id = ?'

    await pool.query(
      homeCardTitle,

      [homepage_card_title, id]
    )

    await pool.query(
      homeCardDesc,

      [homepage_card_desc, id]
    )

    await pool.query(
      homeCardButtonText,

      [homepage_card_button_text, id]
    )

    await pool.query(
      homeCardButtonColor,

      [homepage_card_button_color, id]
    )

    await pool.query(
      homeCardButtonBackgroundColor,

      [homepage_card_button_background_color, id]
    )

    res.json('Home Card has been updated')
  } catch (err) {
    console.log(err.message)
  }
}

exports.deleteCard = async (req, res) => {
  try {
    const { id } = req.params
    await pool.query('DELETE FROM homepage_third_card WHERE id = ?', [id])
    res.json('Home Card Info has been deleted')
  } catch (err) {
    console.log(err.message)
  }
}
