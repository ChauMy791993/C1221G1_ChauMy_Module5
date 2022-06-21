import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Transaction} from './model/transaction';


const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(API_URL + '/transactions');
  }

  saveTransaction(transaction): Observable<Transaction> {
    return this.http.post<Transaction>(API_URL + '/transactions', transaction);
  }

  findById(id: number): Observable<Transaction> {
    return this.http.get<Transaction>(`${API_URL}/transactions/${id}`);
  }

  updateTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.put<Transaction>(`${API_URL}/transactions/${transaction.id}`, transaction);
  }

  deleteTransaction(id: number): Observable<Transaction> {
    return this.http.delete<Transaction>(`${API_URL}/transactions/${id}`);
  }

  search(value: any, value2: any): Observable<Transaction[]> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<Transaction[]>
    (`${API_URL}/transactions?typeService_like=${value}&customer.customerName_like=${value2}`);
  }
}
