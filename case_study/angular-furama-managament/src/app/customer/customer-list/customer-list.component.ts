import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {customers} from '../../data/customer';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[];
  p = 1;

  constructor(private customerService: CustomerService) {
    this.customers = customerService.getList();
  }

  ngOnInit(): void {
  }

}
