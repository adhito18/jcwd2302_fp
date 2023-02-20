'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transaction', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reservation: {
        type: Sequelize.STRING
      },
      reservation_location: {
        type: Sequelize.STRING
      },
      room_price: {
        type: Sequelize.INTEGER
      },
      room_name: {
        type: Sequelize.STRING
      },
      total_room: {
        type: Sequelize.INTEGER
      },
      total_price: {
        type: Sequelize.INTEGER
      },
      exp: {
        type: Sequelize.DATE
      },
      checkin: {
        type: Sequelize.DATE
      },
      checkout: {
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
    await queryInterface.dropTable('transactions');
  }
};