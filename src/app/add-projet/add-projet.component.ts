import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import {NgForm} from '@angular/forms';
import { Project } from 'src/_models/project.module';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrls: ['./add-projet.component.css']
})
export class AddProjetComponent implements OnInit {

  project:Project={
    client:"",
    projet:"",
    designation:"",
    test:"",
    pm:"",
    pe:"",
    status:"",
    start_date:new Date(),
    end_date:new Date(),
    due_end_date:new Date(),
    progress:"",
    target:"",
    lead_time:"",
    delay:"",
    projetType:"",
    
  }
  statusOptions = ['AWARDED','EN_ATTENTE','NOT_AWARDED'];
  statusOptionss = ['Released','On going','Canceled'];


 constructor(private http:ServiceService){}
 ngOnInit(): void {
   
 }


addProject(projectForm:NgForm){


    this.http.addProject(projectForm.value).subscribe(
      (res:Project)=>{
        
        console.log(res);
      },
      (error: HttpErrorResponse)=>{
        console.log(error);
      }
    );
    projectForm.reset();
    console.log(this.project);
}


  
  
}