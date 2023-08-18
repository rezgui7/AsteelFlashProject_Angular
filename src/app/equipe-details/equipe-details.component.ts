import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-equipe-details',
  templateUrl: './equipe-details.component.html',
  styleUrls: ['./equipe-details.component.css']
})
export class EquipeDetailsComponent implements OnInit{
  id:any;
  equipe:any;
  constructor(private route: ActivatedRoute,
    private http:ServiceService,
    private r:Router){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.http.getEquipeById(this.id)
             .subscribe(resp=>{
              console.log(resp)
              this.equipe=resp})
  }
  viewMember(id:any){
    this.r.navigate(['admin/assignMember',{id:id}]);

  }
}
