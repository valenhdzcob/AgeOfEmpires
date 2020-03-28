import { Component, OnInit, Input } from '@angular/core';
import { Civilizations } from '../models/civilizations';

@Component({
  selector: 'app-civs-details',
  templateUrl: './civs-details.component.html',
  styleUrls: ['./civs-details.component.css']
})
export class CivsDetailsComponent implements OnInit {

  @Input() selectedN:Civilizations;
  
  constructor() { }

  ngOnInit() {
  }

}
