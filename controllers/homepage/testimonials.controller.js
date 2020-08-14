const pool = require('../../config/mysql.config')

// Post testimonial
exports.createTestimonial = async (req, res) => {
  try {
    const { testimonial_desc, testimonial_img, testimonial_name } = req.body

    const testimonials = [testimonial_desc, testimonial_img, testimonial_name]

    const newEntry = await pool.query(
      'INSERT INTO testimonials (testimonial_desc, testimonial_img, testimonial_name) VALUES(?) RETURNING *',
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
    const { testimonial_desc, testimonial_img, testimonial_name } = req.body

    let testimonialDesc =
      'UPDATE testimonials SET testimonial_desc = ? WHERE id = ?'

    let testimonialImg =
      'UPDATE testimonials SET testimonial_img = ? WHERE id = ?'

    let testimonialName =
      'UPDATE testimonials SET testimonial_name = ? WHERE id = ?'

    await pool.query(
      testimonialDesc,

      [testimonial_desc, id]
    )

    await pool.query(
      testimonialImg,

      [testimonial_img, id]
    )

    await pool.query(
      testimonialName,

      [testimonial_name, id]
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
