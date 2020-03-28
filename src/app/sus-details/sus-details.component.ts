import { Component, OnInit, Input } from '@angular/core';
import {Structure} from '../models/structure';

@Component({
  selector: 'app-sus-details',
  templateUrl: './sus-details.component.html',
  styleUrls: ['./sus-details.component.css']
})
export class SusDetailsComponent implements OnInit {

  @Input() selectedN:Structure;

  constructor() { }

  ngOnInit() {
  }

}
