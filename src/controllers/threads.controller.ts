import { NextFunction, Request, Response } from 'express';
import { Thread } from '@interfaces/threads.interface';
import ThreadService from '@services/thread.service';

class ThreadsController {
  public threadService = new ThreadService();
  public get = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllThreadData: Thread[] = await this.threadService.findAll();
      res.status(200).json({ data: findAllThreadData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };
}

export default ThreadsController;
