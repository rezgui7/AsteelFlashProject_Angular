import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  getMostHardWorking1:any;
  warning1:any;
  warning2:any;

  constructor(private r:Router, private http:ServiceService){}

  ngOnInit(): void {
    this.http.getMostHardWorking().subscribe((data) =>{
       this.getMostHardWorking1=data
       console.log(this.getMostHardWorking1)

      });

      this.http.displayEquipewithoutMember().subscribe((data) =>{
        this.warning1=data
       });
      
       this.http.displaySPwithoutTeam().subscribe((data) =>{
        this.warning2=data
        console.log(data)
       });

  }
  assignMember(id:any){
    this.r.navigate(['admin/assignMember',{id:id}]);
  }
  AssignIt(id:any){
    this.r.navigate(['admin/assignTeam',{id:id}]);

  }
}
