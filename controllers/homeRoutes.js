const router = require('express').Router();
const { Op } = require("sequelize");
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
        },
        // {
        //   model: Users,
        //   attributes: ['first_name', 'last_name'],
        // },
      ]
    });

    const groups = records.map((record) => record.get({plain: true}));
  
    console.log(records);
    res.render('groups_list', {groups, loggedIn: true}); 
  }catch (err){
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/profile', loginAuthentication, async (req, res) => {
  try{
  const recordsTopics = await Topics.findAll({});

  const userData = await Users.findAll({
    where: {
      id: {[Op.ne]: req.session.user_id}
    }
  });

  const recordsEnrollments = await Users.findByPk(req.session.user_id, {
    attributes: { exclude: ['password'] },
    include: [
      { 
        model: Groups, 
        through: Enrollments, 
        as: 'user_id',
        include: [
          {
            model: Topics,
            attributes: ['topic_name'],
          },
          {
            model: Users,
            attributes: ['first_name', 'last_name'],
          },
        ]
      },
    ]
  });

  const users = userData.map((user) => user.get({plain: true}));
  const topics = recordsTopics.map((recordsTopics) => recordsTopics.get({plain: true}));
  const enrollments = recordsEnrollments.get({ plain: true });
  console.log();
  res.render('profile', { 
    topics,
    enrollments,
    users,
    loggedIn: true
  }); 
  console.log(enrollments);
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
    const userData = await Users.findAll({
      where: {
        id: {[Op.ne]: req.session.user_id}
      }
    });

    const users = userData.map((user) => user.get({plain: true}));


    const group = recordData.get({ plain: true });
  
    console.log(users);
    res.render('group', { group, users, loggedIn: true, users}); 
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
