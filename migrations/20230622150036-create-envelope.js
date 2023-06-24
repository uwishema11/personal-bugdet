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
        references: {model: 'Categories', key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      envelopeName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true
      },
      monthlyBudget: {
        type: Sequelize.STRING
      },
      currentBalance: {
        type: Sequelize.STRING
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