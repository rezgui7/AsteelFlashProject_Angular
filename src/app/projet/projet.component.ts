import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})

export class ProjetComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort; // Add this line to access the MatSort directive

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
  dataSource2 = new MatTableDataSource<any>(this.projectList1);
  selectedDate: any;

  constructor(private r:Router, private http:ServiceService){}

  ngOnInit(): void {
  // Set the MatSort to your data source
  this.dataSource.sort = this.sort;

  // Apply custom filter function
  this.dataSource.filterPredicate = (data, filter) => {
    const searchString = filter.trim().toLowerCase();
    const dateString = data.start_date.toLowerCase();
    const clientName = data.client.toLowerCase();

    // Check if the filter string is present in either the "start_date" or "client" column
    return dateString.includes(searchString) || clientName.includes(searchString);
  };

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
  
  applyStartDateFilter(filterValue: string) {
    if (filterValue != null) {
      this.applyFilter(filterValue, 'start_date');
    }
  }
  
  applyClientFilter(filterValue: string) {
    if (filterValue != null) {
      this.applyFilter(filterValue, 'client');
    }
  }
  
  applyFilter(filterValue: string, column: string) {
    if (filterValue != null) {
      // Your existing filter logic here
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }
  
  
  
  
  
  
}
