import { Component, OnInit } from '@angular/core';
import { Structure } from '../models/structure';
import { StructureService } from '../services/structure.service';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent{

  sus : Structure[] =[];
  selectedN : Structure;

  title= "ESTRUCTURAS";
  //Imágenes de iconos
  imags=[
    'https://steamuserimages-a.akamaihd.net/ugc/950727242794142660/5C45A54D79ADC30764FDDFBDD3F99BDDBD8701F7/',
    'https://TTsteamuserimages-a.akamaihd.net/ugc/950727242794142660/5C45A54D79ADC30764FDDFBDD3F99BDDBD8701F7/',
    'https://steamuserimages-a.akamaihd.net/ugc/950727242794142660/5C45A54D79ADC30764FDDFBDD3F99BDDBD8701F7/',
    'https://TTsteamuserimages-a.akamaihd.net/ugc/950727242794142660/5C45A54D79ADC30764FDDFBDD3F99BDDBD8701F7/', 
    'https://steamuserimages-a.akamaihd.net/ugc/950727242794142660/5C45A54D79ADC30764FDDFBDD3F99BDDBD8701F7/'   
  ];
  //Recibe los datos de la API y las guarda en un arreglo
  constructor(public structureService:StructureService) {
    this.structureService.getStruc().subscribe(susdata =>
      {
        this.sus=susdata;
      })   
     }
     onSelect(sus:Structure){
      this.selectedN = sus;      
   }   

}
