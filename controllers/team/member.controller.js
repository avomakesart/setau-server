const pool = require('../../config/mysql.config')

// Post member
exports.createMember = async (req, res) => {
  try {
    const {
      member_image,
      member_name,
      member_position,
      member_description,
    } = req.body

    
    const member = [
      member_image,
      member_name,
      member_position,
      member_description,
    ]


    const newEntry = await pool.query(
      'INSERT INTO team_members (member_image, member_name, member_position, member_description) VALUES(?)',
      [member]
    )

    res.json(newEntry)
  } catch (err) {
    console.log(err.message)
  }
}

// Get all members
exports.getMember = async (req, res) => {
  try {
    const newEntry = await pool.query('SELECT * FROM team_members')
    res.json(newEntry)
  } catch (err) {
    console.log(err.message)
  }
}

// Get a member by id
exports.getMemberById = async (req, res) => {
  try {
    const { id } = req.params
    const values = await pool.query(
      'SELECT * FROM team_members WHERE id = ?',
      [id]
    )

    res.json(values)
  } catch (err) {
    console.log(err.message)
  }
}

// Update a member
exports.updateMember = async (req, res) => {
  try {
    const { id } = req.params
    const {
      member_image,
      member_name,
      member_position,
      member_description,
    } = req.body

    let memberImage = 'UPDATE team_members SET member_image = ? WHERE id = ?'

    let membarName = 'UPDATE team_members SET member_name = ? WHERE id = ?'

    let memberPosition =
      'UPDATE team_members SET member_position = ? WHERE id = ?'

    let memberDescription =
      'UPDATE team_members SET member_description = ? WHERE id = ?'

    await pool.query(
      memberImage,

      [member_image, id]
    )

    await pool.query(
      membarName,

      [member_name, id]
    )

    await pool.query(
      memberPosition,

      [member_position, id]
    )

    await pool.query(
      memberDescription,

      [member_description, id]
    )

    res.json('Member has been updated')
  } catch (err) {
    console.log(err.message)
  }
}

// Delete a member
exports.deleteMember = async (req, res) => {
  try {
    const { id } = req.params
    await pool.query('DELETE FROM team_members WHERE id = ?', [id])
    res.json('Member has been deleted')
  } catch (err) {
    console.log(err.message)
  }
}
