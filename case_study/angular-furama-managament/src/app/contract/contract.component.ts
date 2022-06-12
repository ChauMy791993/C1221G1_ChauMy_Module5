import {Component, OnInit} from '@angular/core';
import {contracts} from '../data/contract';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contracts = contracts;

  constructor() {
  }

  ngOnInit(): void {
  }

}
