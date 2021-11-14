import express, { Application } from 'express';

export class Server {
   private app: Application;
   private port: string;

   constructor() {
      this.app = express();
      this.port = process.env.PORT || '3000';
   }

   public listen() {
      this.app.listen(this.port, () => {
         console.log(`App listening at http://localhost:${this.port}`);
      });
   }
}
