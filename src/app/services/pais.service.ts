import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../pais/interface/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  urlApi: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) {}

  buscarPorPais(busqueda: string): Observable<Pais[]> {
    const url: string = `${this.urlApi}/name/${busqueda}`;

    return this.http.get<Pais[]>(url);
  }

  buscarPorCapital(busqueda: string): Observable<Pais[]> {
    const url: string = `${this.urlApi}/capital/${busqueda}`;
    return this.http.get<Pais[]>(url);
  }

  buscarPorCodigoAlpha(id: string): Observable<Pais> {
    const url: string = `${this.urlApi}/alpha/${id}`;
    return this.http.get<Pais>(url);
  }

  buscarPorRegion(region: string): Observable<Pais[]> {
    const url: string = `${this.urlApi}/regionalbloc/${region}`;
    return this.http.get<Pais[]>(url);
  }
}
