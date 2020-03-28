import { Component, OnInit } from '@angular/core';
import { Units } from '../models/units';
import { UnitsService } from '../services/units.service';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent{

   //Crear arreglo  
   units : Units[] =[];

   selectedN : Units;
   title= "UNIDADES";
   //Imágenes de iconos
   imags=[
     'https://steamuserimages-a.akamaihd.net/ugc/950727242794142660/5C45A54D79ADC30764FDDFBDD3F99BDDBD8701F7/',
     'https://TTsteamuserimages-a.akamaihd.net/ugc/950727242794142660/5C45A54D79ADC30764FDDFBDD3F99BDDBD8701F7/',
     'https://steamuserimages-a.akamaihd.net/ugc/950727242794142660/5C45A54D79ADC30764FDDFBDD3F99BDDBD8701F7/',
     'https://TTsteamuserimages-a.akamaihd.net/ugc/950727242794142660/5C45A54D79ADC30764FDDFBDD3F99BDDBD8701F7/', 
     'https://steamuserimages-a.akamaihd.net/ugc/950727242794142660/5C45A54D79ADC30764FDDFBDD3F99BDDBD8701F7/'   
   ];
   //Recibe los datos de la API y las guarda en un arreglo
   constructor(public unitService:UnitsService) {
     this.unitService.getUn(). subscribe(unitsdata =>
       {
         this.units=unitsdata;
       })   
    }
    onSelect(un:Units){
      this.selectedN = un;
      console.log(un.name + 'sirvooo');
    }
}
