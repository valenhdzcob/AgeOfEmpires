import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Civilizations } from '../models/civilizations'
import {environment} from '../environments/environments'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) {
      console.log('Service is working!');
   }
   suma (a:number, b:number){
   }
   getData(){
     return this.http.get<Civilizations[]>(`${environment.v2.api_url}`);
   }
}
