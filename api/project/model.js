// build your `Project` model here
const db = require("../../data/dbConfig");

const getProjects = async () => {
  const rows = await db("projects");

  const updatedRows = rows.map((row) => {
    if (row.project_completed === 0) {
      return { ...row, project_completed: false };
    } else {
      return { ...row, project_completed: true };
    }
  });

  return updatedRows;
};

const getProjectById = (id) => {
  return db("projects").where("project_id", id).first();
};

const createProject = async (project) => {
  const [id] = await db("projects").insert(project);
  const newProject = await getProjectById(id);
  if (newProject.project_completed === 0) {
    return { ...newProject, project_completed: false };
  } else {
    return { ...newProject, project_completed: true };
  }
};

module.exports = { getProjects, createProject };
