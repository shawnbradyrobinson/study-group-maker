const { Skills } = require("../models");

const skillsdata = [
    {
        skill_name: "HTML"
    },
    {
        skill_name: "CSS"
    },
    {
        skill_name: "Node.js"
    },
    {
        skill_name: "REST API's"
    },
    {
        skill_name: "Web API's"
    },
    {
        skill_name: "Express.js"
    },
    {
        skill_name: "Inquirer"
    },
    {
        skill_name: "Object Oriented Programming"
    },
    {
        skill_name: "Modularized Routes"
    },
    {
        skill_name: "Middleware"
    },
    {
        skill_name: "MySQL"
    },
    {
        skill_name: "ORM"
    },
    {
        skill_name: "Models"
    },
    {
        skill_name: "Views"
    },
    {
        skill_name: "Controllers"
    },

];

const seedSkills = () => Skills.bulkCreate(skillsdata);

module.exports = seedSkills; 