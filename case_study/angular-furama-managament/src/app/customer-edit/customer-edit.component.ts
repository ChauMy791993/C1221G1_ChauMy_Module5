import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {customerTypes} from '../data/customer-type';
import {CustomerService} from '../service/customer.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Customer} from '../model/customer';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm: FormGroup;
  customerTypes = customerTypes;
  confirmCustomer: Customer;

  constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const customerId = paramMap.get('customerId');
      if (customerId != null) {
        this.confirmCustomer = this.customerService.findById(Number(customerId));
      }
    });
  }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      customerCode: new FormControl(this.confirmCustomer.customerCode, [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
      customerName: new FormControl(this.confirmCustomer.customerName, [Validators.required]),
      dateOfBirth: new FormControl(this.confirmCustomer.dateOfBirth, [Validators.required, Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')]),
      gender: new FormControl(this.confirmCustomer.gender, [Validators.required]),
      idCard: new FormControl(this.confirmCustomer.idCard, [Validators.required, Validators.pattern('^\\d{9}$')]),
      phone: new FormControl(this.confirmCustomer.phone, [Validators.required, Validators.pattern('^(091|090|\\(\\+84\\)90|\\(\\+84\\)91)\\d{7}$')]),
      address: new FormControl(this.confirmCustomer.address, [Validators.required]),
      email: new FormControl(this.confirmCustomer.email, [Validators.required, Validators.email]),
      customerType: new FormControl(this.confirmCustomer.customerType, [Validators.required]),
    });
  }

  editCustomer() {
  }

}
