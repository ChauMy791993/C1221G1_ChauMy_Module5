import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../customer/model/customer';
import {Facility} from '../../facility/model/facility';
import {ContractService} from '../contract.service';
import {CustomerService} from '../../customer/customer.service';
import {FacilityService} from '../../facility/facility.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contractForm: FormGroup;
  customers: Customer [] = [];
  facilities: Facility [] = [];

  constructor(private contractService: ContractService, private customerService: CustomerService,
              private facilityService: FacilityService, private router: Router) {
  }

  ngOnInit(): void {
    this.customers = this.customerService.getListCustomer();
    this.facilities = this.facilityService.getListFacility();
    this.contractForm = new FormGroup({
      startDate: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}\\-(0[1-9]|1[012])\\-(0[1-9]|[12][0-9]|3[01])$')]),
      endDate: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}\\-(0[1-9]|1[012])\\-(0[1-9]|[12][0-9]|3[01])$')]),
      deposit: new FormControl('', [Validators.required, Validators.pattern('^\\+*\\d+$')]),
      customer: new FormControl('', [Validators.required]),
      facility: new FormControl('', [Validators.required]),
    });
  }

  createContract() {
    if (this.contractForm.valid) {
      this.contractService.saveContract(this.contractForm.value);
      this.router.navigate(['/contract/contract-list']);
    }
  }
}
