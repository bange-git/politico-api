'use strict';
import type { Sequelize } from 'sequelize';
import { DataTypes } from 'sequelize';
const { Model } = require('sequelize');
module.exports = (sequelize: Sequelize) => {
  class Candidate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      Candidate.belongsTo(models.Office, { targetKey: 'id', foreignKey: 'officeId' })
      Candidate.belongsTo(models.Party, { targetKey: 'id', foreignKey: 'partyId' })
      Candidate.belongsTo(models.User, { targetKey: 'id', foreignKey: 'userId' })
    }
  }
  Candidate.init(
    {
      officeId: DataTypes.INTEGER,
      partyId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Candidate',
    },
  );
  return Candidate;
};
