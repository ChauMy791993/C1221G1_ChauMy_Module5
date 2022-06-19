import {Injectable} from '@angular/core';
import {Customer} from './model/customer';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(API_URL + '/customers');
  }

  saveCustomer(customer): Observable<Customer> {
    return this.http.post<Customer>(API_URL + '/customers', customer);
  }

  findById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${API_URL}/customers/${id}`);
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${API_URL}/customers/${customer.id}`, customer);
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.http.delete<Customer>(`${API_URL}/customers/${id}`);
  }

  search(value: any, value2: any, value3: any): Observable<Customer[]> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<Customer[]>
    (`${API_URL}/customers?customerName_like=${value}&phone_like=${value2}&customerType.customerTypeName_like=${value3}`);
  }

  // getListCustomer() {
  //   return this.customers;
  // }
  //
  // saveCustomer(customer) {
  //   if (customer.id === undefined) {
  //     customer.id = this.customers.length + 1;
  //     this.customers.push(customer);
  //   }
  // }
  //
  // findById(id: number) {
  //   return this.customers.find(customer => customer.id === id);
  // }
  //
  // updateCustomer(id: number, customer: Customer) {
  //   for (let i = 0; i < this.customers.length; i++) {
  //     if (this.customers[i].id === id) {
  //       this.customers[i] = customer;
  //     }
  //   }
  // }
  //
  // deleteCustomer(id: number) {
  //   this.customers = this.customers.filter(customer => {
  //     return customer.id !== id;
  //   });
  // }
}
