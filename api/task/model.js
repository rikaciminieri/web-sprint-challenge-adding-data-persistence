// build your `Task` model here
const db = require("../../data/dbConfig");

const getTasks = async () => {
  const rows = await db("tasks as t")
    .join("projects as p", "t.project_id", "p.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "task_notes",
      "task_completed",
      "project_name",
      "project_description"
    );

  const updatedRows = rows.map((row) => {
    if (row.task_completed === 0) {
      return { ...row, task_completed: false };
    } else {
      return { ...row, task_completed: true };
    }
  });

  return updatedRows;
};

const getTaskById = (id) => {
  return db("tasks").where("task_id", id).first();
};

const createTask = async (task) => {
  const [id] = await db("tasks").insert(task);
  const newTask = await getTaskById(id);
  if (newTask.task_completed === 0) {
    return { ...newTask, task_completed: false };
  } else {
    return { ...newTask, task_completed: true };
  }
};

module.exports = { getTasks, createTask };
