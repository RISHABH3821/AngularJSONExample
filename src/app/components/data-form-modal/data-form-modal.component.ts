import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { SuperDomain } from 'src/app/models/super-domain';
import { SitesService } from 'src/app/services/sites.service';

@Component({
  selector: 'app-data-form-modal',
  templateUrl: './data-form-modal.component.html',
  styleUrls: ['./data-form-modal.component.css']
})
export class DataFormModalComponent implements OnInit {

  sampleForm = {
    domain: '',
    storage: 0,
    domainTag: '',
    monthlyVisitorCapacity: 0,
    usedStorage: 0,
    monthlyVisitor: 0,
    availableDomains: 0,
    usedDomains: 0,
    subDomain: this.formBuilder.array([{
      domain:'',
      usedStorage: 0,
      domainTag: '',
      status: '',
      monthlyVisitor: 0
    }]),
    status: ''
  }

  checkoutForm = this.formBuilder.group(this.sampleForm);

  get subDomain() {
    return this.checkoutForm.get('subDomain') as FormArray;
  }


  constructor(private formBuilder:FormBuilder, private siteService: SitesService) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log('control here')
    console.log(this.checkoutForm.value);
    this.siteService.postDomain(this.checkoutForm.value).subscribe((e)=>console.log(e));
  }

}
