import {Injectable} from '@angular/core';
import {facilities} from '../data/facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facilities = facilities;

  getList() {
    return this.facilities;
  }

  save(facility) {
    this.facilities.push(facility);
  }

  constructor() {
  }
}
