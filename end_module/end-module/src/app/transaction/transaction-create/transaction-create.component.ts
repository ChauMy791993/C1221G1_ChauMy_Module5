import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../model/customer';
import {CustomerService} from '../customer.service';
import {TransactionService} from '../transaction.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.component.css']
})
export class TransactionCreateComponent implements OnInit {

  transactionForm: FormGroup;
  customers: Customer[] = [];

  constructor(private transactionService: TransactionService, private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getCustomerList();
    this.transactionForm = new FormGroup({
      code: new FormControl('', [Validators.required]),
      dateTransaction: new FormControl('', [Validators.required]),
      typeService: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required]),
      customer: new FormControl(null, [Validators.required]),
    });
  }
  getCustomerList() {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
    });
  }

  createTransaction() {
    if (this.transactionForm.valid) {
      const transaction = this.transactionForm.value;
      this.transactionService.saveTransaction(transaction).subscribe(() => {
        alert('Create Successfully');
        this.router.navigate(['/transaction/transaction-list']);
      }, e => {
        console.log(e);
      });
    }
  }

}
