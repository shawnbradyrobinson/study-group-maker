const router = require('express').Router();
const { Groups, Topics, Users, Enrollments } = require("../models");
const loginAuthentication = require('../utils/authentication');

router.get('/', async (req, res) => {
  try {
    const records = await Groups.findAll({});

  const groups = records.map((record) => record.get({plain: true}));

  console.log(records);
  res.status(200).render('homepage', {
    groups,
    loggedIn: req.session.loggedIn
  }); 
  } catch (err){
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  try{

    if(req.session.loggedIn) {
      res.redirect('/profile');

      return;
    }

    res.render('login');
  } catch(err) {
    console.log(err);
    res.status(500).json(err); 
  }
});

router.get('/groups', loginAuthentication, async (req, res) => {
  try {
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
  }catch (err){
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/profile', loginAuthentication, async (req, res) => {
  try{
  const recordsTopics = await Topics.findAll({});

  const recordsEnrollments = await Users.findByPk(1, {
    attributes: { exclude: ['password'] },
    include: [{ model: Groups, through: Enrollments, as: 'user_id' }]


  });

  const topics = recordsTopics.map((recordsTopics) => recordsTopics.get({plain: true}));
  const enrollments = recordsEnrollments.get({ plain: true });
  console.log(enrollments);
  res.render('profile', { 
    topics,
    enrollments,
    loggedIn: true
  }); 

  }catch (err){
    console.log(err);
    res.status(500).json(err);
  }
  
});

router.get('/groups/:id', loginAuthentication, async (req, res) => {
  try{
    const recordData = await Groups.findByPk(req.params.id, {
      include: [
        {
          model: Topics,
          attributes: ['topic_name'],
        }
      ]
    });
  
    const group = recordData.get({ plain: true });
  
    console.log(recordData);
    res.render('group', { group }); 
  } catch (err){
    console.log(err);
    res.status(500).json(err);
  }
})

router.get('/enrollments/:id', async (req, res) => {
  try{
    const records = await Groups.findByPk(req.params.id,{
      include: [{ model: Users, through: Enrollments, as: 'group_id' }]
  
  
    });
    //const enrollments = records.map((record) => record.get({plain: true}));
  
    res.send(records);
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



module.exports = router;
