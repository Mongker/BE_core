import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import ThreadsController from '@controllers/threads.controller';

class ThreadsRoute implements Routes {
  public path = '/thread';
  public router = Router();
  public indexController = new ThreadsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.indexController.get);
  }
}

export default ThreadsRoute;
