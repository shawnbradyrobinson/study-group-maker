const sequelize = require("../config/connection");
const Users = require("../models/Users");
// const seedUsers = require("./usersData");
// const seedSkills = require("./skillsData");
// const seedGroups = require("./groupsData");

const seedAll = async () => {
    await sequelize.sync({force: true});

    await Users.bulkCreate(usersdata);

    // await seedSkills();

    // await seedGroups();

    process.exit(0);



};
console.log(Users);
// seedAll();