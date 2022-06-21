import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../model/customer';
import {CustomerService} from '../customer.service';
import {TransactionService} from '../transaction.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-transaction-edit',
  templateUrl: './transaction-edit.component.html',
  styleUrls: ['./transaction-edit.component.css']
})
export class TransactionEditComponent implements OnInit {

  transactionForm: FormGroup;
  customers: Customer[] = [];
  transactionId: number;
  submit = false;

  constructor(private customerService: CustomerService, private transactionService: TransactionService,
              private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.transactionId = +paramMap.get('id');
      this.getTransaction(this.transactionId);
    });
  }

  ngOnInit(): void {
    this.getCustomerList();
  }

  getTransaction(id: number) {
    return this.transactionService.findById(id).subscribe(transaction => {
      this.transactionForm = new FormGroup({
        id: new FormControl(transaction.id),
        code: new FormControl(transaction.code, [Validators.required]),
        dateTransaction: new FormControl(transaction.dateTransaction, [Validators.required]),
        typeService: new FormControl(transaction.typeService, [Validators.required]),
        price: new FormControl(transaction.price, [Validators.required]),
        area: new FormControl(transaction.area, [Validators.required]),
        customer: new FormControl(transaction.customer, [Validators.required]),
      });
    });
  }

  getCustomerList() {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
    });
  }

  updateTransaction(transactionId: number) {
    this.submit = true;
    if (this.transactionForm.valid) {
      this.submit = false;
      const transaction = this.transactionForm.value;
      this.transactionService.updateTransaction(transaction).subscribe(() => {
        alert('Update Successfully');
        this.router.navigate(['/transaction/transaction-list']);
      });
    }
  }

  compareFn(t1, t2): boolean {
    return t1 && t2 ? t1.id === t2.id : t1 === t2;
  }

}
