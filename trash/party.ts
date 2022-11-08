import type { Sequelize } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
module.exports = (sequelize: Sequelize) => {
  const Party = sequelize.define('party', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    hqAddress: {
      type: DataTypes.STRING,
    },
    logoUrl: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  });

  return Party;
};
