'use strict';
const { Model } = require('sequelize');
import type { Optional, Sequelize } from 'sequelize';
import { DataTypes } from 'sequelize';

export interface UserAttributes {
  id: number;
  firstname: string;
  lastname: string;
  othername?: string;
  email: string;
  password: string;
  phoneNumber: string;
  passportUrl: string;
  isAdmin: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export type UserCreationAttributes = Optional<
  UserAttributes,
  'id' | 'othername' | 'phoneNumber' | 'isAdmin' | 'passportUrl'
>;

export type UserUpdateAttributes = Omit<
  Partial<UserAttributes>,
  'id' | 'createdAt'
>;

export type UserOuput = Omit<UserAttributes, 'password'>;

module.exports = (sequelize: Sequelize) => {
  class User extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models: any) {
    //   // define association here
    // }
  }
  User.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      othername: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phoneNumber: {
        type: DataTypes.STRING,
      },
      passportUrl: {
        type: DataTypes.STRING,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};

// import type { Sequelize } from 'sequelize';
// import { DataTypes, Model } from 'sequelize';
// module.exports = (sequelize: Sequelize) => {
//   const User = sequelize.define('user', {
//     id: {
//       allowNull: false,
//       autoIncrement: true,
//       primaryKey: true,
//       type: DataTypes.INTEGER,
//     },
//     firstname: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     lastname: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     othername: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     email: {
//       type: DataTypes.STRING,
//       unique: true,
//       allowNull: false,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     phoneNumber: {
//       type: DataTypes.STRING,
//     },
//     passportUrl: {
//       type: DataTypes.STRING,
//     },
//     isAdmin: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false,
//     },
//     createdAt: {
//       allowNull: false,
//       type: DataTypes.DATE,
//     },
//     updatedAt: {
//       allowNull: false,
//       type: DataTypes.DATE,
//     },
//   });

//   return User;
// };
