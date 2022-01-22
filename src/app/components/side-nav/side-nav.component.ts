import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  menuOptions = [
    {title:'Dashboard', icon:'fa-pie-chart', selected:false, link:'/sample'},
    {title:'Site Details', icon:'fa-window-maximize', selected:true, link:'/site-details'},
    {title:'Profile', icon:'fa-database', selected:false, link:'/sample'},
  ];

  selectedIndex = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(index:number){
    this.menuOptions[this.selectedIndex].selected = false;
    this.menuOptions[index].selected = true;
    this.selectedIndex = index;

  }

}
