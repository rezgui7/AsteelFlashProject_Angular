import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Equipe } from 'src/_models/equipe.module';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit {
  equipe:Equipe={
    pm:"",
    npp:0,
    ncp:0,
    projet_on_going:0,
    projet_stand_by:0,
    projet_canceled:0,
    equipeType:""
    
  }
  
  statusOptions = ['ICT_TEST_KPI', 'ICT_TEST_KPI', 'AUTO_TEST', 'SKR_DIMT_KPI', 'DFT_TEST_KPI'];
  constructor(private http:ServiceService){}
  ngOnInit(): void {
    
  }
  addEquipe(equipeForm:NgForm){
    this.http.addEquipe(equipeForm.value).subscribe(
      (res:Equipe)=>{
        
        console.log(res);
      },
      (error: HttpErrorResponse)=>{
        console.log(error);
      }
    );
    equipeForm.reset();

    console.log(this.equipe);
}
clear(equipeForm:NgForm){
  equipeForm.reset();
}
}
