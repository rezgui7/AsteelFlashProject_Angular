import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-sous-project',
  templateUrl: './sous-project.component.html',
  styleUrls: ['./sous-project.component.css']
})
export class SousProjectComponent implements OnInit{
  id:any;
  project:any;
  constructor(private route: ActivatedRoute,
    private http:ServiceService,
    private r:Router){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.http.displaySousProjetsWithProjetID(this.id)
             .subscribe(resp=>{
              console.log(resp)
              this.project=resp})
  }
  AssignIt(id:number){
    this.r.navigate(['admin/assignTeam',{id:id}]);
  }
}
