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

        topic_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'topics',
                key: 'id',
                unique: false
            }
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
        modelName: "study_groups",
    }

);

module.exports = Groups; 