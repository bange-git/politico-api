'use strict';

const { Model } = require('sequelize');
import type { Sequelize } from 'sequelize';
import { DataTypes } from 'sequelize';
module.exports = (sequelize:Sequelize) => {
  class Office extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models: any) {
    //   // define association here
    // }
  }
  Office.init({
    type: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Office',
  });
  return Office;
};