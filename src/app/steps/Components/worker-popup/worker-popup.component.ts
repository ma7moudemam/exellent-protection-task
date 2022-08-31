import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Worker } from '../../models/worker.model';
import { WorkersService } from '../../Services/workers.service';

@Component({
  selector: 'app-worker-popup',
  templateUrl: './worker-popup.component.html',
  styleUrls: ['./worker-popup.component.css']
})
export class WorkerPopupComponent implements OnInit {

  @Input() selectedWorker!: Worker;;
  @Input()  displayModal!: boolean ;
  @Output() displayChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit(): void {
  }

  display() {
    this.displayModal= !(this.displayModal);
    this.displayChange.emit(this.displayModal);
  }

  
}
