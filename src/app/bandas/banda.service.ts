import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Banda } from './Banda';

@Injectable({
  providedIn: 'root'
})
export class BandaService{
private apiUrl: string = 'https://raw.githubusercontent.com/Uniandes-isis2603/recursos-isis2603/master/json/rockbands.json';

constructor( private http: HttpClient) { }
getBandas(): Observable<Banda[]>{
  console.log("servicio")
  return this.http.get<Banda[]>(this.apiUrl);
}
getBanda(id: number): Observable<Banda> {
  return this.http.get<Banda>(this.apiUrl + "/" + id);
}


}
