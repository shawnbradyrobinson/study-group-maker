const { Groups } = require("../mdoels");

const groupsdata = [
    {
        group_name: "testGroup1",
        study_topic: 2,
        skill_level: "beginner",
        zoom_link: "www.google.com",
        meet_time: "5:00 PM CST"
    },

    {
        group_name: "testGroup2",
        study_topic: 1,
        skill_level: "advanced",
        zoom_link: "www.google.com",
        meet_time: "7:00 PM CST"
    }


];

const seedGroups = () => Groups.bulkCreate(groupsdata);

module.exports = seedGroups; 