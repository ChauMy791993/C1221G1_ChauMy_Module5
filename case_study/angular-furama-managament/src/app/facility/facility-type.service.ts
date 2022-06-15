import {Injectable} from '@angular/core';
import {FacilityType} from './model/facility-type';

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {
  private facilityTypes: FacilityType[] = [
    {
      id: 1,
      facilityTypeName: 'Villa',
    },
    {
      id: 2,
      facilityTypeName: 'House',
    },
    {
      id: 3,
      facilityTypeName: 'Room',
    }
  ];

  constructor() {
  }

  getAllFacilityType() {
    return this.facilityTypes;
  }
}
