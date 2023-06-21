const { Users } = require("../models/Users");

const usersdata = [
    {
        user_name: "shawn777",
        first_name: "Shawn",
        last_name: "Robinson",
        email: "shawn@mail.com",
        password: "password"
    },
    {
        user_name: "gabby98",
        first_name: "Gabriela",
        last_name: "Robinson",
        email: "gabby@mail.com",
        password: "password"
    },

];

const seedUsers = () => Users.bulkCreate(usersdata);

module.exports = seedUsers; 