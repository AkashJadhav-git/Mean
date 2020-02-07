import { Component, OnInit } from '@angular/core';
import { inside } from '@syncfusion/ej2-angular-charts';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';


@Component({
  selector: 'pm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public data:Object[];
  public chartTitle : String;
  public chartLabel : Object;
  public tooltip : object;

  constructor() { 
    this.chartTitle = 'Placements Engineering Departmentwise'
    this.data = [
      {name : 'Compueter', value : 37, text : '37%'},
      {name : 'Mechanical', value : 17, text : '17%'},
      {name : 'Civil', value : 19, text : '19%'},
      {name : 'Elecrical', value : 4, text : '4%'},
      {name : 'EXTC', value : 11, text : '11%'},
      {name : 'Others', value : 12, text : '12%'}

    ];
    this.chartLabel = {
      visible : true,
      position : 'Inside',
      name : 'text'
    }
    this.tooltip = {
     enable : true,
     format : '${point.x} : <b>${point.y}%</b>'
    }
  }

  ngOnInit() {
  }

}
