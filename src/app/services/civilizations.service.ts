import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Civilizations } from '../models/civilizations'
import {environment} from '../environments/environments'

@Injectable({
  providedIn: 'root'
})
export class CivilizationsService {

  constructor(private http : HttpClient) {
    console.log('Civilization is working!');
  }
  //Get Data
  getCivs(){
    return this.http.get<Civilizations[]>(`${environment.v2.api_url}/civilizations`,{headers: {'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'}});
  }
}
