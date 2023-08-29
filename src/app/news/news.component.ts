import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit{

  news:any;

  constructor(private r:Router, private http:ServiceService){}

  ngOnInit(): void {
    this.http.techNews().subscribe(data=>{
      this.news=data.articles
      console.log(this.news)
    });
  }
}
