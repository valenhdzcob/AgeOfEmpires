import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Structure } from '../models/structure'
import {environment} from '../environments/environments'

@Injectable({
  providedIn: 'root'
})
export class StructureService {

  constructor(private http : HttpClient) {
    console.log('Structure is working!');
  }
  getStruc(){
    return this.http.get<Structure[]>(`${environment.v2.api_url}/structures`,{headers: {'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'}});
  }
}
