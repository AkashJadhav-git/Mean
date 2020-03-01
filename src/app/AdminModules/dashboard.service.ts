import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  cards() {
    return [71, 78, 39, 66];
  }

  pieChart() {
    return [{
      name: 'Computer Engineering',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'Civil',
      y: 21.84
    }, {
      name: 'Mechanical',
      y: 10.85
    }, {
      name: 'EXTC',
      y: 3.67
    }, {
      name: 'Electrical',
      y: 2.24
    }, ];
  }


}
