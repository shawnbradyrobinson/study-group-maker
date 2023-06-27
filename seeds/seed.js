const sequelize = require("../config/connection");
const seedUsers = require("./usersData");
const seedSkills = require("./skillsData");
const seedGroups = require("./groupsData");
const seedEnrollments = require("./enrollmentsData")

const seedAll = async () => {
    await sequelize.sync({force: true});

    await seedUsers();

    await seedSkills();

    await seedGroups();

    await seedEnrollments();

    process.exit(0);

};

seedAll();
