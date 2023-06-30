const router = require('express').Router();
const fs = require('fs');

const { Groups } = require('../../models');

router.get('/', (req, res, next) => {

console.log("api/groups message");

res.send("hi");
next()

}).post('/', async (req, res) => {
    //Create a new group
    //This code is currently taken directly from Week 14 example 19 Ins-Middleware, so if there's something that doesn't fit, that's probably why...
    try {
      const newGroupData = await Groups.create({
        //id? id: req.body.id,
        group_name: req.body.group_name,
        group_description: req.body.group_description,
        topic_id: req.body.topic_id,
        skill_level: req.body.skill_level,
        zoom_link: req.body.zoom_link,
        meet_time: req.body.meet_time,
      });
      const group = newGroupData.get({ plain: true });
      res.status(200).json(group);
  
    //   req.session.save(() => {
    //     req.session.loggedIn = true;
  
    //     res.status(200).json(newGroupData);
    //   });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });



router.get('/data', (req, res, next) => {
    console.log("hi there");
    const data = fs.readFileSync("./seeds/json_data/groups_data.json", "utf8");

    res.json(data);
    
    }).post('/data', (req, res, next) => {
    });
//JSON.parse(data) will be used to 

module.exports = router; 