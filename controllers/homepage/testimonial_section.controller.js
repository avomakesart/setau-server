const pool = require('../../config/mysql.config')

// Post testimonial section
exports.createTestimonialSection = async (req, res) => {
  try {
    const { testimonial_title, testimonial_subtitle } = req.body

    const section = [
      testimonial_title, testimonial_subtitle
    ]

    const newEntry = await pool.query(
      'INSERT INTO testimonial_section (testimonial_title, testimonial_subtitle) VALUES(?)',
      [section]
    )

    res.json(newEntry)
  } catch (err) {
    console.log(err.message)
  }
}

// Get all the testimonial section
exports.getTestimonials = async (req, res) => {
  try {
    const newEntry = await pool.query('SELECT * FROM testimonial_section')
    res.json(newEntry)
  } catch (err) {
    console.log(err.message)
  }
}

// Get testimonial section by id
exports.getTestimonialById = async (req, res) => {
  try {
    const { id } = req.params
    const testimonials = await pool.query(
      'SELECT * FROM testimonial_section WHERE id = ?',
      [id]
    )

    res.json(testimonials)
  } catch (err) {
    console.log(err.message)
  }
}

// Update testimonial section
exports.updateTestimonial = async (req, res) => {
  try {
    const { id } = req.params
    const { testimonial_title, testimonial_subtitle } = req.body

    let testimonialTitle =
      'UPDATE testimonial_section SET testimonial_title = ? WHERE id = ?'

    let testimonialSubtitle =
      'UPDATE testimonial_section SET testimonial_subtitle = ? WHERE id = ?'

    await pool.query(
      testimonialTitle,

      [testimonial_title, id]
    )

    await pool.query(
      testimonialSubtitle,

      [testimonial_subtitle, id]
    )

    res.json('Testimonial section has been updated')
  } catch (err) {
    console.log(err.message)
  }
}

// Delete testimonial section
exports.deleteTestimonial = async (req, res) => {
  try {
    const { id } = req.params
    await pool.query('DELETE FROM testimonial_section WHERE id = ?', [id])
    res.json('Testimonial Info has been deleted')
  } catch (err) {
    console.log(err.message)
  }
}
