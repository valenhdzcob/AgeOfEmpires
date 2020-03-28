import { Component, OnInit, Input } from '@angular/core';
import { Units } from '../models/units';

@Component({
  selector: 'app-unit-details',
  templateUrl: './unit-details.component.html',
  styleUrls: ['./unit-details.component.css']
})
export class UnitDetailsComponent implements OnInit {

  @Input() selectedN:Units;

  constructor() { }

  ngOnInit() {
  }

}
