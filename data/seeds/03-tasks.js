const tasks = [
  {
    task_description: "Create API",
    task_notes: "Finish by 09/23/21",
    task_completed: 1,
    project_id: 1,
  },
  {
    task_description: "Style candy colors",
    task_notes: "Finish by 10/21/21",
    task_completed: 0,
    project_id: 2,
  },
  {
    task_description: "Build backend",
    task_notes: "Finish by 11/04/21",
    task_completed: 0,
    project_id: 3,
  },
  {
    task_description: "Deploy to Heroku",
    task_notes: "Finish by 11/06/21",
    task_completed: 0,
    project_id: 3,
  },
  {
    task_description: "Watch YoutTube video on Javascript Listeners",
    task_completed: 0,
    project_id: 2,
  },
  {
    task_description: "Add authentication",
    task_notes: "Finish by 9/29/21",
    task_completed: 0,
    project_id: 1,
  },
];

exports.tasks = tasks;

exports.seed = function (knex) {
  return knex("tasks").insert(tasks);
};
