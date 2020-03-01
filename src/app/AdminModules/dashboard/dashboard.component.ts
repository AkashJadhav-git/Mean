import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'pm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cards = [];
  pieChart = [];
  
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {

    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();


  }

}
