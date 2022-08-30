import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {

  // steps = ['تحديد العنوان' ,'اختيار الباقة', 'اختيار العاملة', 'التفاصيل' , 'عرض العقد' , 'المرفقات' , 'الدفع'];
  // icons =['fa-map-marker-alt','fa-list-alt','fa-user','fa-info-circle','fa-paperclip','fa-money-bill-wave','fa-credit-card'];
  constructor() { }

  ngOnInit(): void {
  }

}
