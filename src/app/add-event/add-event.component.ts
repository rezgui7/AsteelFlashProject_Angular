import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { Schedule } from 'src/_models/schedule.module';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  constructor(private route:ActivatedRoute,
    private router:Router,private fb: FormBuilder, private http: ServiceService) {}

  addEvent(eventForm:NgForm){
    this.http.addSchedule(eventForm.value).subscribe(
      (res:Schedule)=>{
        
        console.log(res);
      },
      (error: HttpErrorResponse)=>{
        console.log(error);
      }
    );
    this.router.navigate(['admin/calendar']);

    console.log(this.event);
}
event:Schedule={
  title:"",
  description:"",
  startTime:new Date,
  endTime:new Date
  
}
clear(equipeForm:NgForm){
  equipeForm.reset();
}
}
