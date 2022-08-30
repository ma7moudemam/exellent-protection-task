import { EventEmitter, Injectable } from '@angular/core';
import { Worker } from '../models/worker.model';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  workers : Worker[] = [
    {
      id:1,
      name:'worker 1',
      position:'عاملة نظافة',
      nationality:'اندونسيا',
      relagion :'غير محدد',
    },
    {
      id:2,
      name:'worker 2',
      position:'عاملة نظافة',
      nationality:'اندونسيا',
      relagion :'غير محدد',
    },
    {
      id:3,
      name:'worker 3',
      position:'عاملة نظافة',
      nationality:'اندونسيا',
      relagion :'غير محدد',
    }
  ]

  constructor() { }

  getWorkers(){
    return this.workers.slice();
  }

  getWorkerByID(id: number){
    return this.workers[id];
  }
}
