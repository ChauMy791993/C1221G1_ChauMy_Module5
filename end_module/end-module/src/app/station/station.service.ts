import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Station} from './model/station';
import {Transaction} from '../transaction/model/transaction';



const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class StationService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Station[]> {
    return this.http.get<Station[]>(API_URL + '/stations');
  }

  saveStation(station): Observable<Station> {
    return this.http.post<Station>(API_URL + '/stations', station);
  }

  findById(id: number): Observable<Station> {
    return this.http.get<Station>(`${API_URL}/stations/${id}`);
  }

  updateStation(station: Station): Observable<Station> {
    return this.http.put<Station>(`${API_URL}/stations/${station.id}`, station);
  }

  deleteStation(id: number): Observable<Station> {
    return this.http.delete<Station>(`${API_URL}/stations/${id}`);
  }

  search(value: any, value2: any): Observable<Station[]> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<Station[]>
    (`${API_URL}/stations?nameHouseCar_like=${value}&location.name_like=${value2}`);
  }
}
