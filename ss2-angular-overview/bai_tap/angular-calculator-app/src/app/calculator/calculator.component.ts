import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  input = '';
  result = '';

  constructor() {
  }

  ngOnInit(): void {
  }


  addValue(value) {
    this.input += value;
  }

  calculate() {
    // tslint:disable-next-line:no-eval
    this.result = eval(this.input);
  }

  remove() {
    this.input = '';
  }


}
