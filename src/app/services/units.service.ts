import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Units } from '../models/units'
import {environment} from '../environments/environments'

@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  constructor(private http : HttpClient) {
    console.log('Units is working!');
  }
  getUn(){
    return this.http.get<Units[]>(`${environment.v2.api_url}/units`,{headers: {'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'}});
  }
}
