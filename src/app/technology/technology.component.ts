import { Component, OnInit } from '@angular/core';
import { Technology } from '../models/technology'
import { TechnologyService } from '../services/technology.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent{

    //Crear arreglo  
    tech : Technology[] =[];
    selectedN : Technology;
    title= "TECNOLOGÍA";
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
    }
    //Recibe los datos de la API y las guarda en un arreglo
    constructor(public techService:TechnologyService) {
      this.techService.getTech(). subscribe(techdata =>
        {
          this.tech=techdata;
        })   
     }   
     onSelect(nam:Technology){
      this.selectedN = nam;
    }
}
