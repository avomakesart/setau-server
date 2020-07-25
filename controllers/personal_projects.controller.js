const pool = require('../config/projects.config')

exports.createPersonalProject = async (req, res) => {
  try {
    const {
      project_title,
      project_description,
      project_image,
      project_date,
      project_headline,
      project_hero_image,
      project_launch_img,
      project_launch_img_two,
      project_launch_img_three,
      project_launch_img_four,
      project_launch_img_five,
      project_launch_desc,
      project_launch_title,
      project_sol_img_two,
      project_sol_img,
      project_sol_desc,
      project_sol_title,
      project_plan_desc,
      project_plan_title,
      project_int_desc,
      project_int_title,
      project_cta_url,
      project_cta_title,
      project_result_img,
      project_result_desc,
      project_result_title,
    } = req.body

    const projectValues = [
      project_title,
      project_description,
      project_image,
      project_date,
      project_headline,
      project_hero_image,
      project_launch_img,
      project_launch_img_two,
      project_launch_img_three,
      project_launch_img_four,
      project_launch_img_five,
      project_launch_desc,
      project_launch_title,
      project_sol_img_two,
      project_sol_img,
      project_sol_desc,
      project_sol_title,
      project_plan_desc,
      project_plan_title,
      project_int_desc,
      project_int_title,
      project_cta_url,
      project_cta_title,
      project_result_img,
      project_result_desc,
      project_result_title,
    ]

    const newProject = await pool.query(
      'INSERT INTO personal_projects (project_title, project_description, project_image, project_date, project_headline, project_hero_image, project_launch_img, project_launch_img_two, project_launch_img_three, project_launch_img_four, project_launch_img_five, project_launch_desc, project_launch_title, project_sol_img_two, project_sol_img, project_sol_desc, project_sol_title, project_plan_desc, project_plan_title, project_int_desc, project_int_title, project_cta_url, project_cta_title, project_result_img, project_result_desc, project_result_title) VALUES (?)',
      [projectValues]
    )

    res.json(newProject)
  } catch (err) {
    console.log(err.message)
  }
}

// get all projects
exports.getPersonalProjects = async (req, res) => {
  try {
    const newProject = await pool.query('SELECT * FROM personal_projects')
    res.json(newProject)
  } catch (err) {
    console.log(err.message)
  }
}

// get a todo
exports.getPersonalProjectsById = async (req, res) => {
  try {
    const { id } = req.params
    const project = await pool.query(
      'SELECT * FROM personal_projects WHERE project_id = ?',
      [id]
    )

    res.json(project)
  } catch (err) {
    console.log(err.message)
  }
}

// update a project
exports.updatePersonalProject = async (req, res) => {
  try {
    const { id } = req.params
    const {
      project_title,
      project_description,
      project_image,
      project_date,
      project_headline,
      project_hero_image,
      project_launch_img,
      project_launch_img_two,
      project_launch_img_three,
      project_launch_img_four,
      project_launch_img_five,
      project_launch_desc,
      project_launch_title,
      project_sol_img_two,
      project_sol_img,
      project_sol_desc,
      project_sol_title,
      project_plan_desc,
      project_plan_title,
      project_int_desc,
      project_int_title,
      project_cta_url,
      project_cta_title,
      project_result_img,
      project_result_desc,
      project_result_title,
    } = req.body

    let titleSql = 'UPDATE personal_projects SET project_title = ? WHERE project_id = ?'

    let descriptionSql =
      'UPDATE personal_projects SET  project_description = ? WHERE project_id = ?'

    let imageSql = 'UPDATE personal_projects SET  project_image = ? WHERE project_id = ?'

    let dateSql = 'UPDATE personal_projects SET project_date = ? WHERE project_id = ?'

    let headlineSql =
      'UPDATE personal_projects SET project_headline = ? WHERE project_id = ?'

    let heroImgSql =
      'UPDATE personal_projects SET project_hero_image = ? WHERE project_id = ?'

    let launchImgSql =
      'UPDATE personal_projects SET project_launch_img = ? WHERE project_id = ?'

    let launchImgTwoSql =
      'UPDATE personal_projects SET project_launch_img_two = ? WHERE project_id = ?'

    let launchImgThreeSql =
      'UPDATE personal_projects SET project_launch_img_three = ? WHERE project_id = ?'

    let launchImgFourSql =
      'UPDATE personal_projects SET project_launch_img_four = ? WHERE project_id = ?'

    let launchImgFiveSql =
      'UPDATE personal_projects SET project_launch_img_five = ? WHERE project_id = ?'

    let launchDescSql =
      'UPDATE personal_projects SET project_launch_desc = ? WHERE project_id = ?'

    let launchTitleSql =
      'UPDATE personal_projects SET project_launch_title = ? WHERE project_id = ?'

    let solutionTitleSql =
      'UPDATE personal_projects SET project_sol_title = ? WHERE project_id = ?'

    let solutionDescSql =
      'UPDATE personal_projects SET project_sol_desc = ? WHERE project_id = ?'

    let solutionImgSql =
      'UPDATE personal_projects SET project_sol_img = ? WHERE project_id = ?'

    let solutionImgTwoSql =
      'UPDATE personal_projects SET project_sol_img_two = ? WHERE project_id = ?'

    let planTitleSql =
      'UPDATE personal_projects SET project_plan_title = ? WHERE project_id = ?'

    let planDescSql =
      'UPDATE personal_projects SET project_plan_desc = ? WHERE project_id = ?'

    let introTitleSql =
      'UPDATE personal_projects SET project_int_title = ? WHERE project_id = ?'

    let introDescSql =
      'UPDATE personal_projects SET project_int_desc = ? WHERE project_id = ?'

    let ctaTitle =
      'UPDATE personal_projects SET project_cta_title = ? WHERE project_id = ?'

    let ctaUrlSql =
      'UPDATE personal_projects SET project_cta_url = ? WHERE project_id = ?'

    let resultTitleSql =
      'UPDATE personal_projects SET project_result_title = ? WHERE project_id = ?'

    let resultDescSql =
      'UPDATE personal_projects SET project_result_desc = ? WHERE project_id = ?'

    let resultImgSql =
      'UPDATE personal_projects SET project_result_img = ? WHERE project_id = ?'

    await pool.query(
      titleSql,

      [project_title, id]
    )

    await pool.query(
      descriptionSql,

      [project_description, id]
    )

    await pool.query(
      imageSql,

      [project_image, id]
    )

    await pool.query(
      dateSql,

      [project_date, id]
    )

    await pool.query(
      headlineSql,

      [project_headline, id]
    )

    await pool.query(
      heroImgSql,

      [project_hero_image, id]
    )

    await pool.query(
      launchImgSql,

      [project_launch_img, id]
    )

    await pool.query(
      launchImgTwoSql,

      [project_launch_img_two, id]
    )

    await pool.query(
      launchImgThreeSql,

      [project_launch_img_three, id]
    )

    await pool.query(
      launchImgFourSql,

      [project_launch_img_four, id]
    )

    await pool.query(
      launchImgFiveSql,

      [project_launch_img_five, id]
    )

    await pool.query(
      launchDescSql,

      [project_launch_desc, id]
    )

    await pool.query(
      launchTitleSql,

      [project_launch_title, id]
    )

    await pool.query(
      solutionTitleSql,

      [project_sol_title, id]
    )

    await pool.query(
      solutionDescSql,

      [project_sol_desc, id]
    )

    await pool.query(
      solutionImgSql,

      [project_sol_img, id]
    )

    await pool.query(
      solutionImgTwoSql,

      [project_sol_img_two, id]
    )

    await pool.query(
      planTitleSql,

      [project_plan_title, id]
    )

    await pool.query(
      planDescSql,

      [project_plan_desc, id]
    )

    await pool.query(
      introTitleSql,

      [project_int_title, id]
    )

    await pool.query(
      introDescSql,

      [project_int_desc, id]
    )

    await pool.query(
      ctaTitle,

      [project_cta_title, id]
    )

    await pool.query(
      ctaUrlSql,

      [project_cta_url, id]
    )

    await pool.query(
      resultTitleSql,

      [project_result_title, id]
    )

    await pool.query(
      resultDescSql,

      [project_result_desc, id]
    )

    await pool.query(
      resultImgSql,

      [project_result_img, id]
    )

    res.json('Project was updated')
  } catch (err) {
    console.log(err.message)
  }
}

exports.deletePersonalProject = async (req, res) => {
  try {
    const { id } = req.params
    await pool.query('DELETE FROM personal_projects WHERE project_id = ?', [id])
    res.json('Project was deleted')
  } catch (err) {
    console.log(err.message)
  }
}
