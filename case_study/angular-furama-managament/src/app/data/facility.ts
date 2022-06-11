import {Facility} from '../module/facility';
import {FacilityType} from '../module/facility-type';
import {RentType} from '../module/rent-type';

export const facilities: Facility[] = [{
  facilityId: 1,
  facilityCode: 'DV-111',
  facilityName: 'Room suite',
  facilityImage: 'assets/img/ocean-suite.jpeg',
  facilityArea: 5000,
  facilityCost: 1000000,
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
    facilityImage: 'assets/img/villa-1.jpeg',
    facilityArea: 25000,
    facilityCost: 10000000,
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
    facilityImage: 'assets/img/villa-2.jpeg',
    facilityArea: 25000,
    facilityCost: 10000000,
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
    facilityId: 4,
    facilityCode: 'DV-4444',
    facilityName: 'House Princess',
    facilityImage: 'assets/img/garden-deluxe.jpeg',
    facilityArea: 14000,
    facilityCost: 5000000,
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

//   ('Villa Beach Front', 25000, 10000000, 10, 'vip', 'Có hồ bơi', 500, 4, 3, 1),
//   ('House Princess 01', 14000, 5000000, 7, 'vip', 'Có thêm bếp nướng', null, 3, 2, 2),
// ('Room Twin 01', 5000, 1000000, , 'normal', 'Có tivi', null, null, 4, 3),
//   ('Villa No Beach Front', 22000, 9000000, 8, 'normal', 'Có hồ bơi', 300, 3, 3, 1),
//   ('House Princess 02', 10000, 4000000, 5, 'normal', 'Có thêm bếp nướng', null, 2, 3, 2),
//   ('Room Twin 02', 3000, 900000, 2, 'normal', 'Có tivi', null, null, 4, 3);
