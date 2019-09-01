import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-head-comp',
  templateUrl: './head-comp.component.html',
  styleUrls: ['./head-comp.component.css']
})
export class HeadCompComponent implements OnInit {
  currDate = new Date();
  constructor() { }

  ngOnInit() {
  }

}
