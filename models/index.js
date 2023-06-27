const Users = require('./Users');
const Skills = require('./Skills');
const Enrollments = require('./Enrollments');
const Groups = require('./Groups');

Users.belongsToMany(Groups, {
  through: {
    model: Enrollments,
    unique: false
  },
  as: 'user_id'
});

Groups.belongsToMany(Users, {
  through: {
    model: Enrollments,
    unique: false
  },
  as: 'group_id'
});

Groups.hasOne(Skills, {
  foreignKey: 'study_topic'
});

// Skills.belongsToMany(Groups, {
//   foreignKey: 'study_topic'
// })

module.exports = { Users, Skills, Enrollments, Groups };
