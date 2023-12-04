import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('compound_database', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql',
  logging:true,
  define: {
    freezeTableName: true
  },
});

export default sequelize;
