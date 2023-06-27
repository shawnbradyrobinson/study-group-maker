const router = require('express').Router();
const fs = require('fs');

const { Group } = require('../../models');

router.get('/', (req, res, next) => {

console.log("api/groups message");

res.send("hi");
next()

})

router.get('/data', (req, res, next) => {
    console.log("hi there");
    const data = fs.readFileSync("./seeds/json_data/groups_data.json", "utf8");

    res.json(data);
    
    }).post('/data', (req, res, next) => {
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
//JSON.parse(data) will be used to 

module.exports = router; 