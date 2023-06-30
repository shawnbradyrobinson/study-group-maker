const router = require('express').Router();
const fs = require('fs');

const { Groups } = require('../../models');

router.get('/', (req, res, next) => {

console.log("api/groups message");

res.send("hi");
next()

<<<<<<< HEAD
})
=======
}).post('/', (req, res) => {
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







});






>>>>>>> 082b07b291cd276eded6bebd3525309310466c36

router.get('/data', (req, res, next) => {
    console.log("hi there");
    const data = fs.readFileSync("./seeds/json_data/groups_data.json", "utf8");

    res.json(data);
    
    }).post('/data', (req, res, next) => {
<<<<<<< HEAD
        const {group_name, study_topic, skill_level, zoom_link, meet_time} = req.body; 

        if (group_name && study_topic && skill_level && zoom_link && meet_time){

            const newGroup = {
                group_name, 
                study_topic, 
                skill_level, 
                zoom_link, 
                meet_time
            };

            fs.readFile("./seeds/json_data/groups_data.json", "utf8", (err, data) =>{
                if (err){
                    console.error(err);
                }else{
                    const parsedGroups = JSON.parse(data);

                    parsedGroups.push(newGroup);

                    const stringifiedGroups = JSON.stringify(parsedGroups);

                    fs.writeFile("./seeds/json_data/groups_data.json", stringifiedGroups, (err) => err ? console.log(err) : console.log("successfully wrote new group to groups_data.json"));

                }


            });

            res.json(newGroup);
            next()



        }else{
            console.log("data isn't coming through yet");
            next()
        }
    })
=======
    });
>>>>>>> 082b07b291cd276eded6bebd3525309310466c36
//JSON.parse(data) will be used to 

module.exports = router; 