import { Component } from '@angular/core';
import { Member } from 'src/_models/member.model';
import { ServiceService } from '../service/service.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent {
  member:Member={
    prenom:""
    
  }

 constructor(private http:ServiceService,private r:Router){}
 ngOnInit(): void {
   
 }


 addMember(memberForm:NgForm){

  
    this.http.addMember(memberForm.value).subscribe(
      (res:Member)=>{
        
        console.log(res);
      },
      (error: HttpErrorResponse)=>{
        console.log(error);
      }
    );
    console.log(this.member);
    this.r.navigate(['admin/equipe']);
}
clear(projectForm:NgForm){
  projectForm.reset();
}
}
