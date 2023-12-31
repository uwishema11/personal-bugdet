'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        Transaction.belongsTo(models.Category,{
        foreignKey: 'categoryId',
        as: 'categories',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
        Transaction.belongsTo(models.Envelope,{
        foreignKey: 'envelopeId',
        as: 'envelopes',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
    }
  }
  Transaction.init({
    amount: DataTypes.DECIMAL,
    description: DataTypes.STRING,
    transaction_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};