import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Transaction} from '../model/transaction';
import {TransactionService} from '../transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactions: Transaction[];
  p = 1;
  nameToDelete: string;
  idToDelete: number;

  @ViewChild('typeService') typeService: ElementRef;
  @ViewChild('customer') customer: ElementRef;

  constructor(private transactionService: TransactionService) {
  }

  ngOnInit(): void {
    // this.getAll();
    this.transactionService.search('', '').subscribe(transactions => this.transactions = transactions);
  }

  getAll() {
    this.transactionService.getAll().subscribe(transactions => {
      this.transactions = transactions;
    });
  }

  deleteModal(name: string, id: number) {
    this.nameToDelete = name;
    this.idToDelete = id;
  }

  deleteTransaction() {
    this.transactionService.deleteTransaction(this.idToDelete).subscribe(() => {
        this.transactionService.deleteTransaction(this.idToDelete);
        this.ngOnInit();
      }
    );
  }

  search() {
    this.transactionService.search(this.typeService.nativeElement.value, this.customer.nativeElement.value).
    subscribe(transactions => {
      this.transactions = transactions;
    });
  }

}
