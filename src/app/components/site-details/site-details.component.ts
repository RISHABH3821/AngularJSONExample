import { Component, OnInit } from '@angular/core';
import { SuperDomain } from 'src/app/models/super-domain';
import { SitesService } from 'src/app/services/sites.service';

@Component({
  selector: 'app-site-details',
  templateUrl: './site-details.component.html',
  styleUrls: ['./site-details.component.css'],
})
export class SiteDetailsComponent implements OnInit {
  showModal: boolean = false;

  constructor(private siteService: SitesService) {}

  domains:SuperDomain[] = [];

  ngOnInit(): void {
    this.fetchTableData();
  }

  openModal() {
    this.showModal = true;
  }

  onModalClose(type:string) {
    this.showModal = false;
    if(type==='Saved'){
      this.fetchTableData();
    }
  }

  fetchTableData(){
    this.siteService.getSites().subscribe((data:SuperDomain[])=>{
      console.log('data', data);
      this.domains = data;
    });
  }

}
