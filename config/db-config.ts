import * as dotenv from 'dotenv';
dotenv.config();

export default {
   port: process.env.PORT ?? 'PORT',
   host: process.env.HOST ?? 'HOST',
   database_name: process.env.DATABASE_NAME ?? 'DATABASE_NAME',
   user: process.env.USER ?? 'USER',
   password: process.env.PASSWORD ?? 'PASSWORD',
};
