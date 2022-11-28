import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { query } from '@angular/animations';
import { SPAPaises } from '../interfaces/search-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  paises: SPAPaises[]=[];
  private url:string='https://restcountries.com/v3.1/name/'


  constructor(private http: HttpClient) { }
 
  buscarPais(query:string):Observable<SPAPaises[]>{
    let clean = query.trim();


    return this.http.get<SPAPaises[]>(`${this.url}${clean}`)
    // .subscribe((resp)=>this.paises=resp)

  }
 
}


