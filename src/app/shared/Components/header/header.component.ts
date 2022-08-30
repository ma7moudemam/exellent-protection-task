import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentLang!: string;

  // items = ['الرئيسية','عن الشركة' ,'خدمات الشركة' ,'الأخبار','الأسئلة الشاعة','اتصل بنا']
  constructor(public translate:TranslateService) {
    this.currentLang = localStorage.getItem('currentLang') || 'ar';
    this.translate.use(this.currentLang);
  }

  ngOnInit(): void {
  }

  changeCurrentLanguage(lang:string) {
    this.translate.use(lang);
    localStorage.setItem('currentLang' ,lang)
  }
}
