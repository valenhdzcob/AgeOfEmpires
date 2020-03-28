import { Component, OnInit, Input } from '@angular/core';
import { Technology } from '../models/technology';

@Component({
  selector: 'app-tech-details',
  templateUrl: './tech-details.component.html',
  styleUrls: ['./tech-details.component.css']
})
export class TechDetailsComponent implements OnInit {

  @Input() selectedN:Technology;

  constructor() { }

  ngOnInit() {
  }

}
