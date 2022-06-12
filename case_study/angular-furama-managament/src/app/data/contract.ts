import {Contract} from '../module/contract';

export const contracts: Contract[] = [
  {
    id: 1,
    startDate: '2022-12-12',
    endDate: '2022-12-12',
    deposit: 0,
    customer: {
      customerId: 1,
      customerCode: 'KH-0001',
      customerName: 'Nguyễn Thị Hào',
      dateOfBirth: '1970-11-07',
      gender: 0,
      idCard: '643431213',
      phone: '0905423362',
      email: 'thihao07@gmail.com',
      address: '23 Nguyễn Hoàng, Đà Nẵng',
      customerType: {
        customerTypeId: 5,
        customerTypeName: 'Member'
      }
    },
    facility: {
      facilityId: 1,
      facilityName: 'Room suite',
      facilityImage: 'assets/img/ocean-suite.jpeg',
      rentType: {
        id: 2,
        rentTypeName: 'Day'
      },
      facilityType: {
        id: 1,
        facilityTypeName: 'Room'
      },
      facilityArea: 5000,
      facilityCost: 1000,
    },
  },
  {
    id: 2,
    startDate: '2022-12-12',
    endDate: '2022-12-12',
    deposit: 180,
    customer: {
      customerId: 3,
      customerCode: 'KH-0003',
      customerName: 'Trương Đình Nghệ',
      dateOfBirth: '1990-02-27',
      gender: 1,
      idCard: '488645199',
      phone: '0373213122',
      email: 'nghenhan2702@gmail.com',
      address: 'K323/12 Ông Ích Khiêm, Vinh',
      customerType: {
        customerTypeId: 1,
        customerTypeName: 'Diamond'
      }
    },
    facility: {
      facilityId: 2,
      facilityName: 'Villa Beach Front',
      facilityImage: 'assets/img/villa-1.jpeg',
      rentType: {
        id: 2,
        rentTypeName: 'Day'
      },
      facilityType: {
        id: 3,
        facilityTypeName: 'Villa'
      },
      facilityArea: 25000,
      facilityCost: 2500,
      poolArea: 500,
      numberOfFloors: 4,
    },
  },
  {
    id: 3,
    startDate: '2022-12-12',
    endDate: '2022-12-08',
    deposit: 0,
    customer: {
      customerId: 5,
      customerCode: 'KH-0005',
      customerName: 'Hoàng Trần Nhi Nhi',
      dateOfBirth: '1995-12-09',
      gender: 0,
      idCard: '795453345',
      phone: '0312345678',
      email: 'nhinhi123@gmail.com',
      address: '224 Lý Thái Tổ, Gia Lai',
      customerType: {
        customerTypeId: 4,
        customerTypeName: 'Silver'
      }
    },
    facility: {
      facilityId: 3,
      facilityName: 'Villa Beach Front',
      facilityImage: 'assets/img/villa-2.jpeg',
      rentType: {
        id: 2,
        rentTypeName: 'Day'
      },
      facilityType: {
        id: 1,
        facilityTypeName: 'Room'
      },
      facilityArea: 25000,
      facilityCost: 3000,
      poolArea: 500,
      numberOfFloors: 4,
    },
  },
  {
    id: 4,
    startDate: '2022-11-11',
    endDate: '2020-11-11',
    deposit: 100,
    customer: {
      customerId: 8,
      customerCode: 'KH-0008',
      customerName: 'Nguyễn Thị Hào',
      dateOfBirth: '1999-04-08',
      gender: 0,
      idCard: '965656433',
      phone: '0763212345',
      email: 'haohao99@gmail.com',
      address: '55 Nguyễn Văn Linh, Kon Tum',
      customerType: {
        customerTypeId: 3,
        customerTypeName: 'Gold'
      }
    },
    facility: {
      facilityId: 4,
      facilityName: 'House Princess',
      facilityImage: 'assets/img/garden-deluxe.jpeg',
      rentType: {
        id: 2,
        rentTypeName: 'Day'
      },
      facilityType: {
        id: 2,
        facilityTypeName: 'House'
      },
      facilityArea: 14000,
      facilityCost: 2000,
      numberOfFloors: 2
    },
  },
];
