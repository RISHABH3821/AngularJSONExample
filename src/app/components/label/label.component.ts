import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {

  @Input() label:string = "Label";
  @Input() color:string = "#33cc86"

  constructor() { }

  ngOnInit(): void {
  }

}
