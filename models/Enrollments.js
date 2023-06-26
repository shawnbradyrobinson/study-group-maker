const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Enrollments extends Model {}

Enrollments.init (
{
    enrollment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        //foreignKey: true, //references Users id
    },

    group_id: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        //foreignKey: true, //references Groups id 
    },


},

{
    sequelize, 
    timestamps: false, 
    freezeTableName: true, 
    underscored: true,
    modelName: "Enrollments"

}

);

module.exports = Enrollments; 