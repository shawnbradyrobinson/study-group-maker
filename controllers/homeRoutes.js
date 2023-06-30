const router = require('express').Router();
const { Groups, Topics, Users } = require("../models/");

router.get('/', async (req, res) => {
  
  const records = await Groups.findAll({});

  const groups = records.map((record) => record.get({plain: true}));

  console.log(records);
  res.render('homepage', {groups}); 
});

router.get('/login', (req, res) => {
  console.log("hitting the login page");
  res.render('login');

});

router.get('/groups', async (req, res) => {
  
  const records = await Groups.findAll({
    include: [
      {
        model: Topics,
        attributes: ['topic_name'],
      }
    ]
  });

  const groups = records.map((record) => record.get({plain: true}));

  console.log(records);
  res.render('groups_list', {groups}); 
});

router.get('/profile', async (req, res) => {
  
  const records = await Groups.findAll({
    include: [
      {
        model: Topics,
        attributes: ['topic_name'],
      },
      {
        model: Users,
        attributes: ['first_name']
      }
    ]
  });

  const groups = records.map((record) => record.get({plain: true}));

  console.log(records);
  res.render('profile', {groups}); 
});


module.exports = router;