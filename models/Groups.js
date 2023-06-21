const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Groups extends Model {}

Groups.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            primaryKey: true,
            autoIncrement: true,
        },

        group_name: {
            type: DataTypes.STRING,
            allowNull: false, 
        },

        group_description: {
            type: DataTypes.STRING, 
            allowNull: true, 
        },

        study_topic: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
        },

        skill_level: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        zoom_link: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        meet_time: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },

    {
        sequelize, 
        timestamps: false, 
        freezeTableName: true,
        underscored: true,
        modelName: "Groups",
    }

);

module.exports = Groups; 