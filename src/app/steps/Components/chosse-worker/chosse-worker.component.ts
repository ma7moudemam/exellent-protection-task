import { Component, OnInit, Output } from '@angular/core';
import { Countries } from '../../models/countries.model';
import { CountriesService } from '../../Services/countries.service';
import { Worker } from '../../models/worker.model';
import { WorkersService } from '../../Services/workers.service';


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
  selectedWorker!: Worker;

  // selectedWorker: Worker={
  //   name:'Elti Ernawati',
  //     position:'عاملة نظافة',
  //     nationality:'اندونسيا',
  //     relagion :'غير محدد',
  // }  


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

  selectWorker(){
    this.selectedWorker; 
  }

  display(show:boolean){
    this.displayModal = show;
  }


}
