import { Component } from '@angular/core';
import { Civilizations } from '../models/civilizations'
import { CivilizationsService } from '../services/civilizations.service';

@Component({
  selector: 'app-civilizations',
  templateUrl: './civilizations.component.html',
  styleUrls: ['./civilizations.component.css']
})

export class CivilizationsComponent{

  //Crear arreglo  
  civs : Civilizations[] =[];
  title= "CIVILIZACIÓN";
  name ="";
  //Imágenes de iconos
  imags=[
    'https://steamuserimages-a.akamaihd.net/ugc/950727242794142660/5C45A54D79ADC30764FDDFBDD3F99BDDBD8701F7/',
    'https://TTsteamuserimages-a.akamaihd.net/ugc/950727242794142660/5C45A54D79ADC30764FDDFBDD3F99BDDBD8701F7/',
    'https://steamuserimages-a.akamaihd.net/ugc/950727242794142660/5C45A54D79ADC30764FDDFBDD3F99BDDBD8701F7/',
    'https://TTsteamuserimages-a.akamaihd.net/ugc/950727242794142660/5C45A54D79ADC30764FDDFBDD3F99BDDBD8701F7/', 
    'https://steamuserimages-a.akamaihd.net/ugc/950727242794142660/5C45A54D79ADC30764FDDFBDD3F99BDDBD8701F7/'   
  ];
  //Recibe el Id del ícono 
    sendId(i,x,y,z) {
      console.log(i,x,y,z);
      this.name = i;
      
  }
  //Recibe los datos de la API y las guarda en un arreglo
  constructor(public civService:CivilizationsService) {
    

    this.civService.getCivs(). subscribe(civdata =>
      {
        this.civs=civdata;
      })   
   }   
}