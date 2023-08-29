import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart,registerables } from 'chart.js';
import { ServiceService } from '../service/service.service';
Chart.register(...registerables);

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  equipeList:any;
  equipeList1:any;
  projetList:any;
  npp=0;
  ncp=0;
  pc=0;
  pog=0;
  psb=0;
  chart = [];
  weatherDates: any[] = [];
  labeldata: any[] = [];
  realdata: any[] = [];
  realdata1: any[] = [];
  labeldata1 : any[] = ["Number of Planned Project","Number of Completed Project","Project Canceled","Project On Going","Project Standby"];

  colordata = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(75, 192, 192, 0.2)','rgba(255, 99, 132, 0.7)',
  'rgba(54, 162, 235, 0.7)',
  'rgba(75, 192, 192, 0.7)',
  'rgba(255, 159, 64, 0.7)',
  'rgba(153, 102, 255, 0.7)'];

  constructor(private r:Router, private http:ServiceService){}
  

  ngOnInit(): void {
    this.http.getAllProjects().subscribe((data) => {
      this.projetList=data
      
      for(let i=0; i<this.projetList.length ;i++){
        //console.log(this.chartdata[i]);
        this.labeldata.push(this.projetList[i].client);
        this.realdata.push(this.projetList[i].progress);
      }
      this.RenderChart(this.labeldata,this.realdata,this.colordata,'bar','barchart');
      

    });
    
    this.http.getAllEquipes().subscribe((data)=>{
      this.equipeList=data
      for(let i=0; i<this.equipeList.length ;i++){
        this.npp+=this.equipeList[i].npp;
        this.ncp+=this.equipeList[i].ncp;  
        this.pc+=this.equipeList[i].projet_canceled;  
        this.pog+=this.equipeList[i].projet_on_going;  
        this.psb+=this.equipeList[i].projet_stand_by;  

        //console.log(this.chartdata[i]);
        
      }
      this.realdata1.push(this.npp);
        this.realdata1.push(this.ncp);
        this.realdata1.push(this.pc);
        this.realdata1.push(this.pog);
        this.realdata1.push(this.psb);
      console.log(this.labeldata1)
      this.RenderChart1(this.labeldata1,this.realdata1,this.colordata,'pie','piechart');
    })
    this.http.getAllProjects().subscribe((data)=>{
      this.equipeList1=data
      let target = this.equipeList1.map((data1:any) => data1.target)
        let progress = this.equipeList1.map((data2:any) => data2.progress)
        let clients = this.equipeList1.map((data3:any) => data3.client)

        
        console.log(clients)
        this.RenderChart2(clients,target,progress);

      })
  
    
  }
  RenderChart(labeldata:any,maindata:any,colordata:any,type:any,id:any) {
    const myChart = new Chart(id, {
      type: type,
      data: {
        labels: labeldata,
        datasets: [{
          label: '# of Progress' ,
          data: maindata,
          backgroundColor: colordata,
          borderColor: [
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }


  RenderChart1(labeldata:any,maindata:any,colordata:any,type:any,id:any) {
    const myChart = new Chart(id, {
      type: type,
      data: {
        labels: labeldata,
        datasets: [{
          label:'# of team state',
          data: maindata,
          backgroundColor: colordata,
          borderColor: [
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1,
          options: {
              responsive: false, // Allow responsive resizing
              maintainAspectRatio: true, // Override aspect ratio
              width: 100, // Set desired width
              height: 100 // Set desired height
          }
        }]
      }
    });
  }
  RenderChart2(labeldata:any,maindata:any,maindata2:any) {
    const chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: labeldata,
        datasets: [
          {
            label:'# target',
            data: maindata,
            borderColor: '#3cba9f',
            fill: false
          },
          {
            label:'# progress',
            data: maindata2,
            borderColor: '#ffcc00',
            fill: false
          },
        ]
      },
      options: {
        scales: {
          x: {
            display: true
          },
          y: {
            display: true,
            beginAtZero: true
          }
        }
      }
    });
  }
}
