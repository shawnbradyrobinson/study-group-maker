const { Enrollments } = require("../models");

const enrollmentsdata = [
    {
        user_id: 1,  
        group_id: 1
    },
    {
        user_id: 3,  
        group_id: 1
    },
    {
        user_id: 4,  
        group_id: 1
    },
    {
        user_id: 5,  
        group_id: 1
    },
    {
        user_id: 1,  
        group_id: 2
    },
    {
        user_id: 2,  
        group_id: 2
    }
];

const seedEnrollments = () => Enrollments.bulkCreate(enrollmentsdata);

module.exports = seedEnrollments; 