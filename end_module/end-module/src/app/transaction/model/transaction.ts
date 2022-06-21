import {Customer} from './customer';

export interface Transaction {
  id: number;
  code: string;
  dateTransaction: string;
  typeService: string;
  price: string;
  area: string;
  customer: Customer;
}
