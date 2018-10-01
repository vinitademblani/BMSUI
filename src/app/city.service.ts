import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from './city';
import {Show} from './show';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CityService {
  constructor(private http:HttpClient) {

   }

  getCities():Observable<City[]>
  {
    console.log("in getAllCities");
    return this.http.get<City[]>("http://localhost:8080/cities");
    
  }
  getAllShowsByCityName(cityId):Observable<Show[]>
  {
    console.log("In getAllShowsByCityName()");
    return this.http.get<Show[]>("http://localhost:8080/cities/"+cityId+"/shows");
  }
}
