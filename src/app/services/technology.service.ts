import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Technology } from '../models/technology'
import {environment} from '../environments/environments'

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  constructor(private http : HttpClient) {
    console.log('Technology is working!');
  }
  getTech(){
    return this.http.get<Technology[]>(`${environment.v2.api_url}/technologies`,{headers: {'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'}});
  }
}
