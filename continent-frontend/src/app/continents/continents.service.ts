import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Continents } from './continents';
import { CreateOrUpdaeContinent } from './create-or-updae-continent';

@Injectable({
  providedIn: 'root'
})
export class ContinentsService {

  constructor( private http:HttpClient) { }

  get(){
    return this.http.get<Continents[]>("http://localhost:3000/continent");
  }

  create(contientCreate:CreateOrUpdaeContinent){

    return this.http.post("http://localhost:3000/continent",contientCreate);
  }

  getById(id:string){

    return this.http.get<Continents>(`http://localhost:3000/continent/${id}`);
  }

  update(id:string, contientupdate:CreateOrUpdaeContinent){
 
    return this.http.put(`http://localhost:3000/continent/${id}`, contientupdate);
  }

  delete(id:string){

    return this.http.delete(`http://localhost:3000/continent/${id}`);
  }
}
