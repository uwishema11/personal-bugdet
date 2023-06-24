'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
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
        envelopeId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {model: 'Envelopes', key:'id'}
      },
      amount: {
        type: Sequelize.DECIMAL
      },
      description: {
        type: Sequelize.STRING
      },
      transaction_date: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Transactions');
  }
};