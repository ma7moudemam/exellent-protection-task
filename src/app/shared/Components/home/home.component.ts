import { Component, OnInit } from '@angular/core';
import { Meta , Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private meta:Meta , private title:Title) { 
    this.meta.addTags([
      {name:'description' ,content:'This is the home page'},
      {name:'keywords' ,content:'Angular, TypeScript, Home'},
      {name:'author' ,content:'Excellent Protection'}]);
    this.title.setTitle('Home Page');
  }

  ngOnInit(): void {
  }

}
