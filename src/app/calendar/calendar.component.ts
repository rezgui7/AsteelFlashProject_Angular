import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService, ScheduleComponent, ActionEventArgs, EventRenderedArgs } from '@syncfusion/ej2-angular-schedule';
import { ServiceService } from '../service/service.service';
import { Schedule } from 'src/_models/schedule.module';
import { formatDate } from '@angular/common';
import { FormBuilder, NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService]

})


export class CalendarComponent implements OnInit {
  @ViewChild('scheduleObj') scheduleObj!: ScheduleComponent;
  @ViewChild('eventTemplate', { static: true }) eventTemplate!: ElementRef;
 
  schedules: Schedule[] = [];
  eventForm: any;
  public eventSettings!: EventSettingsModel;

  constructor(private fb: FormBuilder, private http: ServiceService) {}

  ngOnInit(): void {
    this.loadSchedules();
  }

  loadSchedules() {
    this.http.getAllSchedule().subscribe(
      (data) => {
        this.schedules = data;
        this.populateEventSettings();
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  populateEventSettings() {
    this.eventSettings = {
      dataSource: this.schedules.map((schedule) => ({
        Subject: schedule.title,
        Description: schedule.description,
        StartTime: new Date(schedule.startTime),
        EndTime: new Date(schedule.endTime),
        IsReadonly: true, // Disable default editing
      })),
    };
  }

  
}