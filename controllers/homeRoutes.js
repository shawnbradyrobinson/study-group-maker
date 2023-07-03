const router = require('express').Router();
const { Groups, Topics, Users, Enrollments } = require("../models/");

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
  
  const recordsTopics = await Topics.findAll({

      // {
      //   model: Users,
      //   where: {
      //     id: 1,
      //     attributes: ['first_name']
      //   },
      // },

  });

  const recordsEnrollments = await Enrollments.findAll({
    where: {
      user_id: 1,
    }, 
    include: {
      model: Groups,
      attributes: ['group_name', 'group_description', 'skill_level', 'zoom_link', 'meet_time'],
    }

  });

  const topics = recordsTopics.map((recordTopic) => recordTopic.get({plain: true}));
  const enrollments = recordsEnrollments.map((recordEnrollment) => recordEnrollment.get({plain: true}));


  console.log(recordTopic);
  console.log(recordEnrollment);
  res.render('profile', { topics, enrollments }); 
});

router.get('/groups/:id', async (req, res) => {

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
})

router.get('/enrollments/:id', async (req, res) => {
  const records = await Enrollments.findAll({
    where: {
      user_id: req.params['id']
    }

  });
  const enrollments = records.map((record) => record.get({plain: true}));

  res.send(records);
  


});



module.exports = router;