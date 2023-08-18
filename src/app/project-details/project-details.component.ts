import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent  implements OnInit{
  id:any;
  project:any;
  constructor(private route: ActivatedRoute,
    private http:ServiceService,
    private r:Router){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.http.getProjectById(this.id)
             .subscribe(resp=>{
              console.log(resp)
              this.project=resp})
  }
  viewSous(id:any){
    this.r.navigate(['admin/sousproject',{id:id}]);

  }
}
