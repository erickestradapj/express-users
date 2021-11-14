import express, { Application } from 'express';
import { Path } from '../interfaces/path.interface';

import userRoutes from '../routes/user.route';

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

      // TODO: Routes of my application
      this.routes();
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
