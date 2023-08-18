import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-assign-team',
  templateUrl: './assign-team.component.html',
  styleUrls: ['./assign-team.component.css']
})
export class AssignTeamComponent {
  id1:any;
  equipeList:any;


  constructor(private http:ServiceService,
    private route:ActivatedRoute,
    private router:Router,){}
  ngOnInit(): void {
    this.http.getAllEquipes().subscribe(data => this.equipeList=data);
    
  }
assign(id:any){
this.id1 = this.route.snapshot.params['id'];
console.log(this.id1);
this.router.navigate(['admin/project']);


this.http.assignTeamToProject(this.id1,id).subscribe();
console.log(id);
}
}
