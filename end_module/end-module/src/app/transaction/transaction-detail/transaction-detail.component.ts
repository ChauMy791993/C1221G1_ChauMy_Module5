import {Component, OnInit} from '@angular/core';
import {Transaction} from '../model/transaction';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../model/customer';
import {CustomerService} from '../customer.service';
import {TransactionService} from '../transaction.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {
  detailTransaction: Transaction;

  constructor(private transactionService: TransactionService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      if (id != null) {
        this.transactionService.findById(Number(id)).subscribe(transaction => {
          this.detailTransaction = transaction;
        });
      }
    });
  }

  ngOnInit(): void {
  }
}
