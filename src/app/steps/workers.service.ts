import { EventEmitter, Injectable } from '@angular/core';
import { Worker } from './worker.model';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  workers : Worker[] = [
    {
      name:'Elti Ernawati',
      position:'عاملة نظافة',
      nationality:'اندونسيا',
      relagion :'غير محدد',
    },
    {
      name:'Elti Ernawati',
      position:'عاملة نظافة',
      nationality:'اندونسيا',
      relagion :'غير محدد',
    },
    {
      name:'Elti Ernawati',
      position:'عاملة نظافة',
      nationality:'اندونسيا',
      relagion :'غير محدد',
    }
  ]

  constructor() { }

  getWorkers(){
    return this.workers.slice();
  }
}
