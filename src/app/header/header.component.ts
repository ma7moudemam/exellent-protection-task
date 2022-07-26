import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // items = ['الرئيسية','عن الشركة' ,'خدمات الشركة' ,'الأخبار','الأسئلة الشاعة','اتصل بنا']
  constructor() { }

  ngOnInit(): void {
  }

}
