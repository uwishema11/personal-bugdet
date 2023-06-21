'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Envelopes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
       categoryId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {model: 'Category', key:'id'}
      },
      envelopeName: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      monthlyBudget: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      currentBalance: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Envelopes');
  }
};