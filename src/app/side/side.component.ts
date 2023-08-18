import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent {
  constructor(private r:Router){}
  viewProject(){
    this.r.navigate(['admin/project']);
  }
  viewTeams(){
    this.r.navigate(['admin/equipe']);
  }
  addProject(){
    this.r.navigate(['admin/addProject']);
  }
  addTeam(){
    this.r.navigate(['admin/addEquipe']);
  }
  addMember(){
    this.r.navigate(['admin/addMember']);
  }

}
