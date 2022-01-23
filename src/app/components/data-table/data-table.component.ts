import { Component, OnInit } from '@angular/core';
import { SuperDomain } from 'src/app/models/super-domain';
import { SitesService } from 'src/app/services/sites.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  constructor(private siteService:SitesService) { }

  domains:SuperDomain[]=[];

  ngOnInit(): void {
    this.fetchTableData();
  }

  fetchTableData(){
    this.siteService.getSites().subscribe((data:SuperDomain[])=>{
      console.log('data', data);
      this.domains = data;
    });
  }

}
