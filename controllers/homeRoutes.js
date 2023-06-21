const router = require('express').Router();
const {Groups} = require("../models/");

router.get('/', async (req, res) => {
  
  const records = await Groups.findAll({});

  const groups = records.map((record) => record.get({plain: true}));

  console.log(records);
  res.render('homepage', {groups}); 
});

router.get('/projects/:id', async (req, res) => {
   const foundProject = await Project.findByPk(req.params.id);

   const project = foundProject.get({plain: true});
   res.render('project', {project});

  });

module.exports = router;