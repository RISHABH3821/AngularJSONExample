import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { SuperDomain } from 'src/app/models/super-domain';
import { SitesService } from 'src/app/services/sites.service';

@Component({
  selector: 'app-data-form-modal',
  templateUrl: './data-form-modal.component.html',
  styleUrls: ['./data-form-modal.component.css'],
})
export class DataFormModalComponent implements OnInit {
  @Output() close = new EventEmitter<string>();

  initialForm = {
    domain: '',
    storage: 0,
    domainTag: '',
    monthlyVisitorCapacity: 0,
    usedStorage: 0,
    monthlyVisitor: 0,
    availableDomains: 0,
    usedDomains: 0,
    subDomain: this.formBuilder.array([]),
    status: '',
  };

  checkoutForm = this.formBuilder.group(this.initialForm);

  get subDomain() {
    return this.checkoutForm.get('subDomain') as FormArray;
  }

  constructor(
    private formBuilder: FormBuilder,
    private siteService: SitesService
  ) {}

  ngOnInit(): void {
    console.log(this.checkoutForm);
  }

  formSubmit() {
    console.log('control here');
    console.log(this.checkoutForm.value);
    this.siteService
      .postDomain(this.checkoutForm.value)
      .subscribe((e) => this.closeModal('Saved'));
  }

  addSubDomain() {
    this.subDomain.push(
      this.formBuilder.group({
        domain: '',
        usedStorage: 0,
        domainTag: '',
        status: '',
        monthlyVisitor: 0,
      })
    );
  }

  removeDomain(index: number) {
    this.subDomain.at(index).markAsDirty();
    this.subDomain.removeAt(index);
  }

  closeModal(type: string) {
    this.close.emit(type);
  }
}
