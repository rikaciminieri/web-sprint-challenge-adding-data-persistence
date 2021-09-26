const resources = [
  { resource_name: "GitHub" },
  { resource_name: "Codecademy", resource_description: "Project Guidance" },
  { resource_name: "Youtube", resource_description: "Concept review" },
  { resource_name: "Knex Docs", resource_description: "How to use Knex" },
  { resource_name: "Heroku", resource_description: "Deploy app here"},

];

exports.resources = resources;

exports.seed = function (knex) {
  return knex("resources").insert(resources);
};
