import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  constructor() { }

  sideBarOpen = false;
  toggleSideBar()
  {
    this.sideBarOpen = !this.sideBarOpen;
  }


  ngOnInit() {
  }

}
