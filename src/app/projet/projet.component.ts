import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {

  projectList:any;


  constructor(private r:Router, private http:ServiceService){}

  ngOnInit(): void {
    this.http.getAllProjects().subscribe(data => this.projectList=data);
  }

  UpdateProject(id:any){
    this.r.navigate(['/admin/updateProject',{id:id}]);
  }
  CreateProject(id:any){
    this.r.navigate(['admin/createSProject',{id:id}]);
  }
  viewDetails(id:any){
    this.r.navigate(['admin/projectDetails',{id:id}]);
  }

}
