import { Component, Input, OnInit } from '@angular/core';
import { SuperDomain } from 'src/app/models/super-domain';

@Component({
  selector: 'app-data-item',
  templateUrl: './data-item.component.html',
  styleUrls: ['./data-item.component.css'],
})
export class DataItemComponent implements OnInit {
  @Input() superDomain: SuperDomain | undefined;

  constructor() {}

  ngOnInit(): void {}
}
