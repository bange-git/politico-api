import type { Sequelize } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
module.exports = (sequelize: Sequelize) => {
  const Office = sequelize.define('office', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.ENUM(
        'Federal',
        'State',
        'Legislative',
        'Local Government',
      ),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
  });

  return Office;
};
