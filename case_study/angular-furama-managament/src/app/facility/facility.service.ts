import {Injectable} from '@angular/core';
import {Facility} from './model/facility';
import {Customer} from '../customer/model/customer';

@Injectable({
  providedIn: 'root'
})
// 1:'assets/img/villa-1.jpeg'
// 2:'assets/img/garden-deluxe.jpeg'
// 3:'assets/img/ocean-suite.jpeg'
export class FacilityService {
  private facilities: Facility[] = [
    {
      facilityId: 1,
      facilityCode: 'DV-111',
      facilityName: 'Room suite',
      facilityImage: 3,
      facilityArea: 5000,
      facilityCost: 1000,
      facilityMaxPeople: 2,
      standardRoom: 'normal',
      descriptionOtherConvenience: 'Có tivi',
      facilityType: {
        id: 3,
        facilityTypeName: 'Room',
      },
      rentType: {
        id: 4,
        rentTypeName: 'hour'
      },
    },
    {
      facilityId: 2,
      facilityCode: 'DV-2222',
      facilityName: 'Villa Beach Front',
      facilityImage: 1,
      facilityArea: 25000,
      facilityCost: 2500,
      facilityMaxPeople: 10,
      standardRoom: 'vip',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 500,
      numberOfFloors: 4,
      facilityType: {
        id: 1,
        facilityTypeName: 'Villa',
      },
      rentType: {
        id: 1,
        rentTypeName: 'Year'
      },
    },
    {
      facilityId: 3,
      facilityCode: 'DV-3333',
      facilityName: 'Villa Beach Front',
      facilityImage: 1,
      facilityArea: 25000,
      facilityCost: 3000,
      facilityMaxPeople: 10,
      standardRoom: 'vip',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 500,
      numberOfFloors: 4,
      facilityType: {
        id: 1,
        facilityTypeName: 'Villa',
      },
      rentType: {
        id: 1,
        rentTypeName: 'year'
      },
    },
    {
      facilityId: 4,
      facilityCode: 'DV-4444',
      facilityName: 'House Princess',
      facilityImage: 2,
      facilityArea: 14000,
      facilityCost: 2000,
      facilityMaxPeople: 7,
      standardRoom: 'vip',
      descriptionOtherConvenience: 'Có thêm bếp nướng',
      numberOfFloors: 2,
      facilityType: {
        id: 2,
        facilityTypeName: 'House',
      },
      rentType: {
        id: 2,
        rentTypeName: 'month'
      },
    },
  ];

  constructor() {
  }

  getListFacility() {
    return this.facilities;
  }

  saveFacility(facility) {
    if (facility.facilityId === undefined) {
      facility.facilityId = this.facilities.length + 1;
      this.facilities.push(facility);
    }
  }

  findById(id: number) {
    return this.facilities.find(facility => facility.facilityId === id);
  }

  updateFacility(id: number, facility: Facility) {
    for (let i = 0; i < this.facilities.length; i++) {
      if (this.facilities[i].facilityId === id) {
        this.facilities[i] = facility;
      }
    }
  }

  deleteFacility(id: number) {
    this.facilities = this.facilities.filter(facility => {
      return facility.facilityId !== id;
    });
  }
}
