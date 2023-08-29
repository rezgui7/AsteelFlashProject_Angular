import { Component } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
@Component({
  selector: 'app-calendar',
  template: '<ejs-schedule></ejs-schedule>',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService]

})

export class CalendarComponent {
  public selectedDate: Date = new Date;
  private data: Object[] = [
    {
      Id: 1,
      Subject: 'Scrum Meeting',
      Location: 'Office',
      StartTime: new Date(2023, 1, 12, 9, 30),
      EndTime: new Date(2024, 1, 12, 10, 30),
      RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR;INTERVAL=1'
    },
  ];
 
  public eventSettings: EventSettingsModel = { dataSource: this.data };
}
