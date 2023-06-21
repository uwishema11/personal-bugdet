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
      // define association here\

      Transaction.belongsTo(models.Category,{
        foreignKey: 'categoryId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
      
      Transaction.belongsTo(models.Envelope,{
        foreignKey: 'categoryId'
      })

    }
  }
  Transaction.init({
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    transaction_date: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};