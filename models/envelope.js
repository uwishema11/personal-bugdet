'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Envelope extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Envelope.belongsTo(models.Category ,{
        foreignKey: 'categoryId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
    }
  }
  Envelope.init({
    envelopeName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    monthlyBudget: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    currentBalance: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Envelope',
  });
  return Envelope;
};