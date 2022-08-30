import { Component, Input, OnInit } from '@angular/core';
import { Worker } from '../../models/worker.model';
import { WorkersService } from '../../Services/workers.service';

@Component({
  selector: 'app-worker-popup',
  templateUrl: './worker-popup.component.html',
  styleUrls: ['./worker-popup.component.css']
})
export class WorkerPopupComponent implements OnInit {

  @Input() id!:number;
  @Input()  displayModal: boolean = false;
  selectedWorker!: Worker;
  constructor(private service: WorkersService ) { }

  ngOnInit(): void {
  }

  getWorker(){
   this.selectedWorker =this.service.getWorkerByID(this.id);
  }

  
}
