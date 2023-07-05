const router = require('express').Router();
const { Groups, Topics, Users, Enrollments } = require("../models");

router.get('/', async (req, res) => {
  try {
    const records = await Groups.findAll({});

  const groups = records.map((record) => record.get({plain: true}));

  console.log(records);
  res.status(200).render('homepage', {groups}); 
  } catch (err){
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  try{
    console.log("hitting the login page");
    res.render('login');
  } catch(err) {
    console.log(err);
    res.status(500).json(err); 
  }
});

router.get('/groups', async (req, res) => {
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

router.get('/profile', async (req, res) => {
  try{
    const recordsTopics = await Topics.findAll({

      // {
      //   model: Users,
      //   where: {
      //     id: 1,
      //     attributes: ['first_name']
      //   },
      // },

  });

  const recordsEnrollments = await Users.findByPk(3, {
    include: [{ model: Groups, through: Enrollments, as: 'user_id' }]


  });

  const topics = recordsTopics.map((recordTopic) => recordTopic.get({plain: true}));
  // const enrollments = recordsEnrollments.map((recordEnrollment) => recordEnrollment.get({plain: true}));


  // console.log(recordsTopics);
  // console.log(recordsEnrollments);
  // res.render('profile', { topics,/* enrollments */}); 
  res.send(recordsEnrollments);
  }catch (err){
    console.log(err);
    res.status(500).json(err);
  }
  
});

router.get('/groups/:id', async (req, res) => {
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
