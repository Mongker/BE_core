import { Thread } from '@interfaces/threads.interface';
import threadModel from '@models/threads.model';

class ThreadService {
  public threads = threadModel;

  public async findAll(): Promise<Thread[]> {
    const threads: Thread[] = await this.threads.find();
    return threads;
  }
}

export default ThreadService;
