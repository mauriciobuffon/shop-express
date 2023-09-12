import { DataTypes } from 'sequelize';
import sequelize from '../util/database.js';

const User = sequelize.define('User', {
    login: { type: DataTypes.STRING, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false }
});

export default User;
