import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTemplateAdminComponent } from './all-template-admin/all-template-admin.component';
import { FooterComponent } from './footer/footer.component';
import { SideComponent } from './side/side.component';
import { HeaderComponent } from './header/header.component';
import { ProjetComponent } from './projet/projet.component';
import { EquipeComponent } from './equipe/equipe.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { AddProjetComponent } from './add-projet/add-projet.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateProjetComponent } from './update-projet/update-projet.component';
import { DatePipe } from '@angular/common';
import { AddSousProjectComponent } from './add-sous-project/add-sous-project.component';
import { AssignMemberComponent } from './assign-member/assign-member.component';
import { EquipeDetailsComponent } from './equipe-details/equipe-details.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { SousProjectComponent } from './sous-project/sous-project.component';
import { AssignTeamComponent } from './assign-team/assign-team.component';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { StatsComponent } from './stats/stats.component';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card'; // Import the MatCardModule
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProfileComponent } from './profile/profile.component';
import { NewsComponent } from './news/news.component';
import { ScheduleModule, RecurrenceEditorModule, DayService, WorkWeekService, MonthService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { CalendarComponent } from './calendar/calendar.component';


@NgModule({
  declarations: [
    AppComponent,
    AllTemplateAdminComponent,
    FooterComponent,
    SideComponent,
    HeaderComponent,
    ProjetComponent,
    EquipeComponent,
    AddEquipeComponent,
    AddProjetComponent,
    AddMemberComponent,
    UpdateProjetComponent,
    AddSousProjectComponent,
    AssignMemberComponent,
    EquipeDetailsComponent,
    ProjectDetailsComponent,
    SousProjectComponent,
    AssignTeamComponent,
    StatsComponent,
    ProfileComponent,
    NewsComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartModule,
    AgGridModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatTooltipModule,
    ScheduleModule, RecurrenceEditorModule

  ],
  providers: [DatePipe,DayService,WorkWeekService,MonthService,MonthAgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
