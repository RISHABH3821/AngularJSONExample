import { Component, Input, OnInit } from '@angular/core';
import { SuperDomain } from 'src/app/models/super-domain';
import { SitesService } from 'src/app/services/sites.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  constructor() { }

  @Input() domains:SuperDomain[]=[];
  searchText = '';

  ngOnInit(): void { 
  }

}
