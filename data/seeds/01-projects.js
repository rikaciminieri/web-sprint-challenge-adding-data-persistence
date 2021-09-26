const projects = [
  {
    project_name: "React Movie Search App",
    project_description:
      "Easily search for movies. Tech stack: React Hooks, API, State Management",
    project_completed: 1,
  },
  {
    project_name: "React Candy Crush",
    project_description: "Addicting game using JavaScript and Tailwind",
    project_completed: 0,
  },
  {
    project_name: "Plantomatic",
    project_description:
      "Never forget to water your plants again. Tech Stack: React, TailwindCSS, Node.js, Express, SQLite3, knex",
    project_completed: 0,
  },
];

exports.projects = projects;

exports.seed = function (knex) {
  return knex("projects").insert(projects);
};
