import {Component, OnInit} from '@angular/core';
import {Customer} from '../module/customer';
import {customers} from '../data/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
   customers = customers;
  constructor() {
  }

  ngOnInit(): void {
  }

}
