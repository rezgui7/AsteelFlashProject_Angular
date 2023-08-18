import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-assign-member',
  templateUrl: './assign-member.component.html',
  styleUrls: ['./assign-member.component.css']
})
export class AssignMemberComponent {
  memberList:any;
  id1:any;
  id:any;
  project:any;
  test:any;
  constructor(private r:Router, private http:ServiceService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    
    this.http.displayMemberWithTeamID(this.id)
             .subscribe(resp=>{
              console.log(resp)
              this.project=resp
              console.log(this.project[0].idMember)})
    this.http.getAllMembers().subscribe(
      data =>{this.memberList=data} );
  }
  assignMember(id:any){
    this.id1 = this.route.snapshot.params['id'];
    console.log(this.id1);
    console.log(id);
    
    this.http.assignMember(id,this.id1).subscribe();
    location.reload();
  }
  unassignMember(id:any){
    this.id1 = this.route.snapshot.params['id'];
    console.log(this.id1);
    console.log(id);
    
    this.http.unassignMember(this.id1,id).subscribe();
    location.reload();
  }

}
