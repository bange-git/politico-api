'use strict';
const {
  Model
} = require('sequelize');
import type { Sequelize } from 'sequelize';
import { DataTypes } from 'sequelize';
module.exports = (sequelize:Sequelize) => {
  class Vote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
    // }
  }
  Vote.init({
    officeId: DataTypes.INTEGER,
    candidateId: DataTypes.INTEGER,
    createdBy: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Vote',
  });
  return Vote;
};