import { Component, Input, OnInit } from '@angular/core';
import { Worker } from '../../models/worker.model';
import { WorkersService } from '../../Services/workers.service';

@Component({
  selector: 'app-worker-popup',
  templateUrl: './worker-popup.component.html',
  styleUrls: ['./worker-popup.component.css']
})
export class WorkerPopupComponent implements OnInit {

  @Input() selectedWorker!: Worker;;
  @Input()  displayModal: boolean = false;
  
  constructor(private service: WorkersService ) { }

  ngOnInit(): void {
  }

  
}
