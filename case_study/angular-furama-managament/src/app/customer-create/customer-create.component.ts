import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../service/customer.service';
import {CustomerType} from '../model/customer-type';
import {Router, Routes} from '@angular/router';
import {customerTypes} from '../data/customer-type';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customerForm: FormGroup;
  customerTypes = customerTypes;

  constructor(private customerService: CustomerService, private routers: Router) {
  }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      customerCode: new FormControl('', [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
      customerName: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')]),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required, Validators.pattern('^\\d{9}$')]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^(091|090|\\(\\+84\\)90|\\(\\+84\\)91)\\d{7}$')]),
      address: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      customerType: new FormControl(null, [Validators.required]),
    });
  }

  createCustomer() {
    if (this.customerForm.valid) {
      this.customerService.save(this.customerForm.value);
      this.routers.navigate(['/customer']);
    }
  }
}
