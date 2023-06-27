const router = require('express').Router();
const {Groups} = require("../models/");

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

module.exports = router;