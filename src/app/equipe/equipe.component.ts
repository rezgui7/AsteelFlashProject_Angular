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
  npp:any;
  pm:any;
  x:any;


  constructor(private r:Router, private http:ServiceService){}

  ngOnInit(): void {
    this.http.getAllEquipes().subscribe(
      (data) => {this.equipeList=data
      this.npp=this.equipeList.map((nppp:any)=>nppp.npp)
      this.pm=this.equipeList.map((pm:any)=>pm.pm)

      console.log(this.equipeList[0].npp)
      console.log(this.npp)
      console.log(this.pm)
      }
      );
    console.log("hgcgcffg")
    console.log(this.equipeList)
  }
  ShowDetails(id:any){
    this.r.navigate(['/admin/assignMember',{id:id}]);
  }
  viewDetails(id:any){
    this.r.navigate(['admin/equipeDetails',{id:id}]);
  }
}
