import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { Project } from 'src/_models/project.module';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetComponent } from '../projet/projet.component';
import { DatePipe } from '@angular/common';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-update-projet',
  templateUrl: './update-projet.component.html',
  styleUrls: ['./update-projet.component.css']
})
export class UpdateProjetComponent implements OnInit{
  userUrl3="http://localhost:1123/asteel/projet/";

  statusOptions = ['AWARDED','EN_ATTENTE','NOT_AWARDED'];
  statusOptionss = ['Released','On going','Canceled'];

  id:any;
  projectDetails:any;

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
  
  constructor(private http:ServiceService,
    private route:ActivatedRoute,
    private router:Router,
    private datePipe: DatePipe){}

  ngOnInit(): void {
   this.id = this.route.snapshot.params['id'];
   console.log(this.id);
   this.http.getProjectById(this.id)
   .subscribe(data =>{
   

    console.log(data);
    

    this.project=data;
    
  }, error => console.log(error));
  
}
  
  
 
 
 updateProject(){
 
 
     this.http.updateProject(this.project).subscribe(
       (res)=>{
        this.goToEmployeeList();
         console.log(res);
       },
       (error: HttpErrorResponse)=>{
         console.log(error);
       }
     );
     console.log(this.project);
 }
 goToEmployeeList(){
  this.router.navigate(['admin/project']);
}


}
