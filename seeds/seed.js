const sequelize = require("../config/connection");
const seedUsers = require("./usersData");
const seedSkills = require("./skillsData");
const seedGroups = require("./groupsData");

const seedAll = async () => {
    await sequelize.sync({force: true});

    await seedUsers();

    await seedSkills();

    await seedGroups();

    process.exit(0);



};

seedAll();