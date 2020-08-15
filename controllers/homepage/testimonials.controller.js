const pool = require('../../config/mysql.config')

// Post testimonial
exports.createTestimonial = async (req, res) => {
  try {
    const { testimonials_desc, testimonials_img, testimonials_name } = req.body

    const testimonials = [
      testimonials_desc,
      testimonials_img,
      testimonials_name,
    ]

    const newEntry = await pool.query(
      'INSERT INTO testimonials (testimonials_desc, testimonials_img, testimonials_name) VALUES(?)',
      [testimonials]
    )

    res.json(newEntry)
  } catch (err) {
    console.log(err.message)
  }
}

// Get all the testimonials
exports.getTestimonials = async (req, res) => {
  try {
    const newEntry = await pool.query('SELECT * FROM testimonials')
    res.json(newEntry)
  } catch (err) {
    console.log(err.message)
  }
}

// Get a testimonial by id
exports.getTestimonialById = async (req, res) => {
  try {
    const { id } = req.params
    const testimonials = await pool.query(
      'SELECT * FROM testimonials WHERE id = ?',
      [id]
    )

    res.json(testimonials)
  } catch (err) {
    console.log(err.message)
  }
}

// Update a testimonial
exports.updateTestimonial = async (req, res) => {
  try {
    const { id } = req.params
    const { testimonials_desc, testimonials_img, testimonials_name } = req.body

    let testimonialDesc =
      'UPDATE testimonials SET testimonials_desc = ? WHERE id = ?'

    let testimonialImg =
      'UPDATE testimonials SET testimonials_img = ? WHERE id = ?'

    let testimonialName =
      'UPDATE testimonials SET testimonials_name = ? WHERE id = ?'

    await pool.query(
      testimonialDesc,

      [testimonials_desc, id]
    )

    await pool.query(
      testimonialImg,

      [testimonials_img, id]
    )

    await pool.query(
      testimonialName,

      [testimonials_name, id]
    )

    res.json('Testimonial has been updated')
  } catch (err) {
    console.log(err.message)
  }
}

// Delete testimonial
exports.deleteTestimonial = async (req, res) => {
  try {
    const { id } = req.params
    await pool.query('DELETE FROM testimonials WHERE id = ?', [id])
    res.json('Testimonial Info has been deleted')
  } catch (err) {
    console.log(err.message)
  }
}
