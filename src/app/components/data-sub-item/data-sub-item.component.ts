import { Component, Input, OnInit } from '@angular/core';
import { Domain } from '../../models/domain';

@Component({
  selector: 'app-data-sub-item',
  templateUrl: './data-sub-item.component.html',
  styleUrls: ['./data-sub-item.component.css'],
})
export class DataSubItemComponent implements OnInit {
  @Input() domain: Domain | undefined;

  constructor() {}

  ngOnInit(): void {}

  get color() {
    return this.domain?.status!=='Active'?'var(--inactive)':'var(--active)'
  }
}
