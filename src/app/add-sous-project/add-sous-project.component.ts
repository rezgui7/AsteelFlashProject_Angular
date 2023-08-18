import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { NgForm } from '@angular/forms';
import { SousProject } from 'src/_models/sousProject.module';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-sous-project',
  templateUrl: './add-sous-project.component.html',
  styleUrls: ['./add-sous-project.component.css']
})
export class AddSousProjectComponent {
  id:any;

  sousProject:SousProject={
    state:'Not Assigned',
    sousProjetType:""
    
  }
  options =[
    {label:'ICT', value:"Option 1"},
    {label:'TAKAYA', value:"Option 2"},
    {label:'FCT', value:"Option 3"},
    {label:'PRG', value:"Option 4 "},
    {label:'TDRI', value:"Option 5 "},
    {label:'BURN_IN', value:"Option 6 "},
  ];
  statusOptions = ['ICT', 'TAKAYA', 'FCT', 'PRG', 'TDRI','BURN_IN'];
  constructor(private http:ServiceService,
    private route:ActivatedRoute,
    private router:Router,){}
  ngOnInit(): void {
    
  }
  addSousProjet(sousProjectForm:NgForm){
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.router.navigate(['admin/project']);

  
    this.http.addSousProject(sousProjectForm.value,this.id).subscribe(
      (res:SousProject)=>{
        
        console.log(res);
      },
      (error: HttpErrorResponse)=>{
        console.log(error);
      }
    );
    console.log(this.sousProject);
}
}
