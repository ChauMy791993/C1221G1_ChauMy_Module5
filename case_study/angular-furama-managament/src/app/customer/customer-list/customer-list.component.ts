import {Component, OnInit} from '@angular/core';
import {Customer} from '../model/customer';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[];
  p = 1;
  nameToDelete: string;
  idToDelete: number;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
    });
  }

  deleteModal(name: string, id: number) {
    this.nameToDelete = name;
    this.idToDelete = id;
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.idToDelete).subscribe(() => {
        this.customerService.deleteCustomer(this.idToDelete);
        this.ngOnInit();
      }
    );
  }
}
