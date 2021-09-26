// build your `/api/tasks` router here
const router = require("express").Router();

const { response } = require("../server");
const Tasks = require("./model");

router.get("/", (req, res, next) => {
  Tasks.getTasks()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Tasks.createTask(req.body)
    .then((newTask) => {
      res.status(201).json(newTask);
    })
    .catch(next);
});
module.exports = router;
