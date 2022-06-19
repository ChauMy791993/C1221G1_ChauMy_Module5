import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
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
    this.getCustomerList();
    this.getFacilityList();
    this.contractForm = new FormGroup({
      startDate: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}\\-(0[1-9]|1[012])\\-(0[1-9]|[12][0-9]|3[01])$')]),
      endDate: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}\\-(0[1-9]|1[012])\\-(0[1-9]|[12][0-9]|3[01])$')]),
      deposit: new FormControl('', [Validators.required, Validators.pattern('^\\+*\\d+$')]),
      customer: new FormControl('', [Validators.required]),
      facility: new FormControl('', [Validators.required]),
    }, [this.validateDate]);
  }

  // get startDate() {
  //   return this.contractForm.get('startDate');
  // }
  //
  // get endDate() {
  //   return this.contractForm.get('endDate');
  // }

  getCustomerList() {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
    });
  }

  getFacilityList() {
    this.facilityService.getAll().subscribe(facilities => {
      this.facilities = facilities;
    });
  }

  createContract() {
    console.log(this.contractForm);
    if (this.contractForm.valid) {
      const contract = this.contractForm.value;
      this.contractService.saveContract(contract).subscribe(() => {
        alert('Create Successfully');
        this.router.navigate(['/contract/contract-list']);
      }, e => {
        console.log(e);
      });
    }
  }

  validateDate(contract: AbstractControl): ValidationErrors {
   const startDate = contract.get('startDate').value;
   const endDate = contract.get('endDate').value;
   console.log(startDate);
   console.log(endDate);
   if (startDate !== '' && endDate !== '') {
      const startDateParse = new Date(startDate);
      const endDateParse = new Date(endDate);
      if (startDateParse > endDateParse) {
        return {invalidDate: true};
      }
    }
   return null;
  }
}
