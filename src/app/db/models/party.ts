'use strict';
const { Model } = require('sequelize');
import type { Sequelize } from 'sequelize';
import { DataTypes } from 'sequelize';
module.exports = (sequelize: Sequelize) => {
  class Party extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
    // }
  }
  Party.init({
    name: DataTypes.STRING,
    hqAddress: DataTypes.STRING,
    logoUrl: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Party',
  });
  return Party;
};