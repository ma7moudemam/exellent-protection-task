import { Component, OnInit } from '@angular/core';
import { Countries } from '../countries.model';
import { CountriesService } from '../countries.service';
import { Worker } from '../worker.model';
import { WorkersService } from '../workers.service';


@Component({
  selector: 'app-chosse-worker',
  templateUrl: './chosse-worker.component.html',
  styleUrls: ['./chosse-worker.component.css']
})
export class ChosseWorkerComponent implements OnInit {

  workers!:Worker[];
  coutries!:Countries[];
  rangeValues: number[] =[20,50];
  displayModal: boolean = false;


  selectedWorker: Worker={
    name:'Elti Ernawati',
      position:'عاملة نظافة',
      nationality:'اندونسيا',
      relagion :'غير محدد',
  }  


  constructor(private workerService: WorkersService , 
              private countriesService : CountriesService) {
   }

 

  ngOnInit(): void {
    this.workers = this.workerService.getWorkers();
    this.coutries = this.countriesService.getCountries();
  
  }

  showModalDialog() {
    this.displayModal = true;
}


}
