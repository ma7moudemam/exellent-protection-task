import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chosse-worker',
  templateUrl: './chosse-worker.component.html',
  styleUrls: ['./chosse-worker.component.css']
})
export class ChosseWorkerComponent implements OnInit {

  workers = [
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

  ngOnInit(): void {
  }

}
