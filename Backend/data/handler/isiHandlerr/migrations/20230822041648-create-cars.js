/** npm run migrate = buat skema database klo ada perubahan (setup database) */

'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cars', { /** buat tabel baru (Cars) */
      id: {
        allowNull: false,
        autoIncrement: true, /**id otomatis nambah tiap ada baris yg baru ditambah */
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      size: {
        type: Sequelize.STRING
      },
      rent_per_day: {
        type: Sequelize.INTEGER
      },
      image_id: {
        type: Sequelize.STRING
      },
      image_url: {
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
    await queryInterface.dropTable('Cars');
  }
};