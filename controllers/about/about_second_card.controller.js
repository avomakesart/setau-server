const pool = require('../../config/mysql.config')

// Post second card
exports.createCard = async (req, res) => {
  try {
    const {
      card_title,
      card_desc,
      card_button_text,
      card_button_color,
      card_button_background_color,
      card_img,
    } = req.body

    const aboutCard = [
      card_title,
      card_desc,
      card_button_text,
      card_button_color,
      card_button_background_color,
      card_img,
    ]

    const newEntry = await pool.query(
      'INSERT INTO about_second_card (card_title, card_desc, card_button_text, card_button_color, card_button_background_color, card_img) VALUES (?)',
      [aboutCard]
    )

    res.json(newEntry)
  } catch (err) {
    console.log(err.message)
  }
}

// Get second card
exports.getCard = async (req, res) => {
  try {
    const newEntry = await pool.query('SELECT * FROM about_second_card')
    res.json(newEntry)
  } catch (err) {
    console.log(err.message)
  }
}

// Get second card by id
exports.getCardById = async (req, res) => {
  try {
    const { id } = req.params
    const aboutCard = await pool.query(
      'SELECT * FROM about_second_card WHERE id = ?',
      [id]
    )

    res.json(aboutCard)
  } catch (err) {
    console.log(err.message)
  }
}

// Update second card
exports.updateCard = async (req, res) => {
  try {
    const { id } = req.params
    const {
      card_title,
      card_desc,
      card_button_text,
      card_button_color,
      card_button_background_color,
      card_img,
    } = req.body

    let aboutCardTitle =
      'UPDATE about_second_card SET card_title = ? WHERE id = ?'

    let aboutCardDesc =
      'UPDATE about_second_card SET card_desc = ? WHERE id = ?'

    let aboutCardButtonText =
      'UPDATE about_second_card SET card_button_text = ? WHERE id = ?'

    let aboutCardButtonColor =
      'UPDATE about_second_card SET card_button_color = ? WHERE id = ?'

    let aboutCardButtonBackgroundColor =
      'UPDATE about_second_card SET card_button_background_color = ? WHERE id = ?'

    let aboutCardImg = 'UPDATE about_second_card SET card_img = ? WHERE id = ?'

    await pool.query(
      aboutCardTitle,

      [card_title, id]
    )

    await pool.query(
      aboutCardDesc,

      [card_desc, id]
    )

    await pool.query(
      aboutCardButtonText,

      [card_button_text, id]
    )

    await pool.query(
      aboutCardButtonColor,

      [card_button_color, id]
    )

    await pool.query(
      aboutCardButtonBackgroundColor,

      [card_button_background_color, id]
    )

    await pool.query(
      aboutCardImg,

      [card_img, id]
    )

    res.json('About Card has been updated')
  } catch (err) {
    console.log(err.message)
  }
}

// Delete second card
exports.deleteCard = async (req, res) => {
  try {
    const { id } = req.params
    await pool.query('DELETE FROM about_second_card WHERE id = ?', [id])
    res.json('About Card Info has been deleted')
  } catch (err) {
    console.log(err.message)
  }
}
