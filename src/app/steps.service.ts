import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StepsService {

  constructor(private http: HttpClient) { }
  
  listarMarcas(): Observable<any> {
    return this.http.get('/assets/json/marcas.json');
  }
  getPrices(): Observable<any> {
    return this.http.get('/assets/json/prices.json');
  }
  listarValores(): Observable<any> {
    return this.http.get('/assets/json/valores.json');
  }
}
