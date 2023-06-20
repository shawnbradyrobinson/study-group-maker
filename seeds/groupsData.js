const { Groups } = require("../mdoels");

const groupsdata = [
    {
        group_name: "testGroup1",
        study_topic: 2,
        skill_level: "beginner",
        member_1: "Shawn Robinson",
        member_2: "Gabriela Robinson",
        member_3: "Atticus Finch",
        member_4: "Holden Caufield",
        zoom_link: "www.google.com",
        meet_time: "5:00 PM CST"
    },

    {
        group_name: "testGroup2",
        study_topic: 1,
        skill_level: "advanced",
        member_1: "Shawn Robinson",
        member_2: "Fyodor D.",
        member_3: "Kurt Vonnegut",
        member_4: "F. Scott",
        zoom_link: "www.google.com",
        meet_time: "7:00 PM CST"
    }





];

const seedGroups = () => Groups.bulkCreate(groupsdata);

module.exports = seedGroups; 