import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})

export class ProjetComponent implements OnInit {
  displayedColumns: string[] = [
    'idProjet',
    'client',
    'designation',
    'test',
    'pm',
    'pe',
    'status',
    'start_date',
    'end_date',
    'due_end_date',
    'progress',
    'target',
    'lead_time',
    'delay',
    'projetType',
    'actions'
  ];
  projectList:any;
  lead:any;
  progress:any;
  searchText:any;
  projectList1: any[] = []; 
  dataSource = new MatTableDataSource<any>(this.projectList1);
  selectedDate: any;

  constructor(private r:Router, private http:ServiceService){}

  ngOnInit(): void {
    this.http.getAllProjects().subscribe(data => {
      this.projectList1 = data;
      console.log(data)
      this.dataSource.data = this.projectList1;
      console.log(this.dataSource.data);
      // Update the table's data source
    });
    this.http.progressPourcentage().subscribe(data => this.progress=data);
    this.http.leadPourcentage().subscribe(data => this.lead=data);
  }
  

  UpdateProject(id:any){
    this.r.navigate(['/admin/updateProject',{id:id}]);
  }
  CreateProject(id:any){
    this.r.navigate(['admin/createSProject',{id:id}]);
  }
  viewDetails(id:any){
    this.r.navigate(['admin/projectDetails',{id:id}]);
  }
  delete(id:any){
    this.http.deleteProject(id).subscribe(data=>console.log(data));
    location.reload();
  }
  getStatusColorClass(status: string): string {
    switch (status) {
      case 'Released':
        return 'status-green';
      case 'On going':
        return 'status-yellow';
      case 'Canceled':
        return 'status-red';
      default:
        return '';
    }
  }
  
  applyFilter(filterValue: string) {
    if (filterValue != null) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }
  
  
  
}
