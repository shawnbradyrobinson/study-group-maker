const Users = require('./Users');
const Skills = require('./Skills');
const Enrollments = require('./Enrollments');
const Groups = require('./Groups');

Users.hasMany(Groups, {
  foreignKey: 'group_id',
});

module.exports = { Users, Skills, Enrollments, Groups };
