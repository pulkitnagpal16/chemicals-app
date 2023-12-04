import { DataTypes } from 'sequelize';
import sequelize from './db.js';

// Define your Sequelize model
const Compound = sequelize.define('compound', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  CompoundName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  CompoundDescription: {
    type: DataTypes.TEXT,
  },
  strImageSource: {
    type: DataTypes.STRING,
  },
  strImageAttribution: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  dateModified: {
    type: DataTypes.DATE,
  },
});

export default Compound;
