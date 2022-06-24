import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Location} from './model/location';


const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<Location[]> {
    return this.http.get<Location[]>(API_URL + '/locationRest/listLocation');
  }
}
