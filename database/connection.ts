import { Sequelize } from 'sequelize';
import dbConfig from '../config/db-config';

const db = new Sequelize(dbConfig.database_name, dbConfig.user, dbConfig.password, {
   host: dbConfig.host,
   dialect: 'mysql',
   //    logging:false
});

export default db;
