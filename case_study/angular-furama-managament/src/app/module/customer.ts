import {CustomerType} from './customer-type';

export interface Customer {
  customerId: number;
  customerCode: string;
  customerName: string;
  gender: number;
  dateOfBirth: string;
  idCard: string;
  address: string;
  phone: string;
  email: string;
  customerType: CustomerType;
}
