import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../customer.service';
import {CustomerType} from '../model/customer-type';
import {Router, Routes} from '@angular/router';
import {CustomerTypeService} from '../customer-type.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customerForm: FormGroup;
  customerTypes: CustomerType[] = [];

  constructor(private customerTypeService: CustomerTypeService, private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getCustomerTypeList();
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

  getCustomerTypeList() {
    this.customerTypeService.getAll().subscribe(customerTypes => {
      this.customerTypes = customerTypes;
    });
  }

  createCustomer() {
    if (this.customerForm.valid) {
      const customer = this.customerForm.value;
      this.customerService.saveCustomer(customer).subscribe(() => {
        alert('Create Successfully');
        this.router.navigate(['/customer/customer-list']);
      }, e => {
        console.log(e);
      });
    }
  }
}

