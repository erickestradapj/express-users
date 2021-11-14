import express, { Application } from 'express';
import userRoutes from '../routes/user.route';
import cors from 'cors';

import { Path } from '../interfaces/path.interface';
import db from '../database/connection';

export class Server {
   private app: Application;
   private port: string;
   private paths: Path;

   constructor() {
      this.app = express();
      this.port = process.env.PORT || '8000';
      this.paths = {
         users: '/api/users',
      };

      // TODO: Middleware
      this.middlewares();

      this.dbConnection();

      // TODO: Routes of my application
      this.routes();
   }

   public async dbConnection() {
      try {
         await db.authenticate();
         console.log('Database online');
      } catch (error) {
         throw new Error('Error - DB');
      }
   }

   public middlewares() {
      // CORS
      this.app.use(cors());

      // Read body
      this.app.use(express.json());

      // public folder
      this.app.use(express.static('public'));
   }

   public listen() {
      this.app.listen(this.port, () => {
         console.log(`App listening at http://localhost:${this.port}`);
      });
   }

   public routes() {
      this.app.use(this.paths.users, userRoutes);
   }
}
