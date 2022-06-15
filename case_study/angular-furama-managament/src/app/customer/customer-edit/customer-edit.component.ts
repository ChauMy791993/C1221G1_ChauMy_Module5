import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Customer} from '../model/customer';
import {CustomerTypeService} from '../customer-type.service';
import {CustomerType} from '../model/customer-type';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm: FormGroup;
  customerTypes: CustomerType[] = [];
  customerId: number;

  constructor(private customerService: CustomerService, private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.customerId = +paramMap.get('id');
      const customer = this.customerService.findById(this.customerId);
      this.customerTypes = this.customerTypeService.getAllCustomerType();
      this.customerForm = new FormGroup({
        customerCode: new FormControl(customer.customerCode, [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
        customerName: new FormControl(customer.customerName, [Validators.required]),
        dateOfBirth: new FormControl(customer.dateOfBirth, [Validators.required, Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')]),
        gender: new FormControl(customer.gender, [Validators.required]),
        idCard: new FormControl(customer.idCard, [Validators.required, Validators.pattern('^\\d{9}$')]),
        phone: new FormControl(customer.phone, [Validators.required, Validators.pattern('^(091|090|\\(\\+84\\)90|\\(\\+84\\)91)\\d{7}$')]),
        address: new FormControl(customer.address, [Validators.required]),
        email: new FormControl(customer.email, [Validators.required, Validators.email]),
        customerType: new FormControl(customer.customerType, [Validators.required]),
      });
    });
  }

  ngOnInit(): void {
  }
  updateCustomer(customerId: number) {
    if (this.customerForm.valid) {
      this.customerService.updateCustomer(customerId, this.customerForm.value);
      this.router.navigate(['/customer/customer-list']);
    }
  }

  compareFn(t1, t2): boolean {
    return t1 && t2 ? t1.id === t2.id : t1 === t2;
  }
}
