import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit{
  equipeList:any;


  constructor(private r:Router, private http:ServiceService){}

  ngOnInit(): void {
    this.http.getAllEquipes().subscribe(data => this.equipeList=data);
  }
  ShowDetails(id:any){
    this.r.navigate(['/admin/assignMember',{id:id}]);
  }
  viewDetails(id:any){
    this.r.navigate(['admin/equipeDetails',{id:id}]);
  }
}
