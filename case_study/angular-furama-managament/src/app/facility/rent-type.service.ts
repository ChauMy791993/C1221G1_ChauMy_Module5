import {Injectable} from '@angular/core';
import {RentType} from './model/rent-type';

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {
  private rentTypes: RentType [] = [
    {
      id: 1,
      rentTypeName: 'year'
    },
    {
      id: 2,
      rentTypeName: 'month'
    },
    {
      id: 3,
      rentTypeName: 'day'
    },
    {
      id: 4,
      rentTypeName: 'hour'
    },
  ];

  constructor() {
  }

  getAllRentType() {
    return this.rentTypes;
  }
}
