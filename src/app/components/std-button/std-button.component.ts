import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-std-button',
  templateUrl: './std-button.component.html',
  styleUrls: ['./std-button.component.css']
})
export class StdButtonComponent implements OnInit {

  @Output() click = new EventEmitter<any>();  
  @Input() type:string = "solid";
  @Input() text:string = "Button";

  constructor() { }

  ngOnInit(): void {
  }

}
