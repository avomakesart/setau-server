const pool = require('../config/projects.config')

exports.createCertificate = async (req, res) => {
  try {
    const {
      name,
      company,
      image,
      expDate,
      credentialID,
      credentialURL,
    } = req.body

    const certificatesValues = [
      name,
      company,
      image,
      expDate,
      credentialID,
      credentialURL,
    ]

    const newEntry = await pool.query(
      'INSERT INTO certificates (name, company, image, expDate, credentialID, credentialURL) VALUES (?)',
      [certificatesValues]
    )

    res.json(newEntry)
  } catch (err) {
    console.log(err.message)
  }
}

// get all projects
exports.getCertificate = async (req, res) => {
  try {
    const newEntry = await pool.query('SELECT * FROM certificates')
    res.json(newEntry)
  } catch (err) {
    console.log(err.message)
  }
}

// get a todo
exports.getCertificateById = async (req, res) => {
  try {
    const { id } = req.params
    const certificate = await pool.query(
      'SELECT * FROM certificates WHERE id = ?',
      [id]
    )

    res.json(certificate)
  } catch (err) {
    console.log(err.message)
  }
}

// update a project
exports.updateCertificate = async (req, res) => {
  try {
    const { id } = req.params
    const {
      name,
      company,
      image,
      expDate,
      credentialID,
      credentialURL,
    } = req.body

    let certName = 'UPDATE certificates SET name = ? WHERE id = ?'

    let certCompany = 'UPDATE certificates SET company = ? WHERE id = ?'

    let certImage = 'UPDATE certificates SET image = ? WHERE id = ?'

    let certExpDate = 'UPDATE certificates SET expDate = ? WHERE id = ?'

    let certCredId = 'UPDATE certificates SET credentialID = ? WHERE id = ?'

    let certCredUrl = 'UPDATE certificates SET credentialURL = ? WHERE id = ?'

    await pool.query(
      certName,

      [name, id]
    )

    await pool.query(
      certCompany,

      [company, id]
    )

    await pool.query(
      certImage,

      [image, id]
    )

    await pool.query(
      certExpDate,

      [expDate, id]
    )

    await pool.query(
      certCredId,

      [credentialID, id]
    )

    await pool.query(
      certCredUrl,

      [credentialURL, id]
    )

    res.json('Certificate updated')
  } catch (err) {
    console.log(err.message)
  }
}

exports.deleteCertificate = async (req, res) => {
  try {
    const { id } = req.params
    await pool.query('DELETE FROM certificates WHERE id = ?', [id])
    res.json('Certificate was updated')
  } catch (err) {
    console.log(err.message)
  }
}
