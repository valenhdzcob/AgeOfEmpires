import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Civilizations } from '../models/civilizations'

@Component({
  selector: 'app-civilizations',
  templateUrl: './civilizations.component.html',
  styleUrls: ['./civilizations.component.css']
})

export class CivilizationsComponent implements OnInit {

  //Crear arreglo
  
  civs : Civilizations[] =[];
  imags=[
    'https://steamuserimages-a.akamaihd.net/ugc/950727242794142660/5C45A54D79ADC30764FDDFBDD3F99BDDBD8701F7/',
    'https://TTsteamuserimages-a.akamaihd.net/ugc/950727242794142660/5C45A54D79ADC30764FDDFBDD3F99BDDBD8701F7/',
    'https://steamuserimages-a.akamaihd.net/ugc/950727242794142660/5C45A54D79ADC30764FDDFBDD3F99BDDBD8701F7/',
    'https://TTsteamuserimages-a.akamaihd.net/ugc/950727242794142660/5C45A54D79ADC30764FDDFBDD3F99BDDBD8701F7/', 
    'https://steamuserimages-a.akamaihd.net/ugc/950727242794142660/5C45A54D79ADC30764FDDFBDD3F99BDDBD8701F7/'   
  ];
  constructor(public data:DataService) { }

  ngOnInit() {
    this.data.getData().subscribe(
        data => {
          console.log(data),
          this.civs = data;
        },
        err => console.log(err)
      )
  }

}
