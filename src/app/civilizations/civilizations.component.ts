import { Component } from '@angular/core';
import { Civilizations } from '../models/civilizations'
import { CivilizationsService } from '../services/civilizations.service';

@Component({
  selector: 'app-civilizations',
  templateUrl: './civilizations.component.html',
  styleUrls: ['./civilizations.component.css']
})

export class CivilizationsComponent{

  //Create Array
  civs : Civilizations[] =[];
  title= "CIVILIZACIÓN";
  //Images for icons
  imags=[
    'https://steamuserimages-a.akamaihd.net/ugc/950727242794142660/5C45A54D79ADC30764FDDFBDD3F99BDDBD8701F7/',
    'https://TTsteamuserimages-a.akamaihd.net/ugc/950727242794142660/5C45A54D79ADC30764FDDFBDD3F99BDDBD8701F7/',
    'https://steamuserimages-a.akamaihd.net/ugc/950727242794142660/5C45A54D79ADC30764FDDFBDD3F99BDDBD8701F7/',
    'https://TTsteamuserimages-a.akamaihd.net/ugc/950727242794142660/5C45A54D79ADC30764FDDFBDD3F99BDDBD8701F7/', 
    'https://steamuserimages-a.akamaihd.net/ugc/950727242794142660/5C45A54D79ADC30764FDDFBDD3F99BDDBD8701F7/'   
  ];
  //Get the icon Id
    sendId(i,x,y,z) {
      //Show in console
      console.log(i,x,y,z);      
  }
  //Get API data and save it in to array
  constructor(public civService:CivilizationsService) {
    this.civService.getCivs(). subscribe(civdata =>
      {
        this.civs=civdata;
      })   
   }   
}