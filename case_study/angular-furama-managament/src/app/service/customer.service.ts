import {Injectable} from '@angular/core';
import {customers} from '../data/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers = customers;

  getList() {
    return this.customers;
  }

  save(customer) {
    this.customers.push(customer);
  }

  deleteById(id) {
    this.customers = this.customers.filter(customer => customer.customerId !== id);
  }

  constructor() {
  }
}
