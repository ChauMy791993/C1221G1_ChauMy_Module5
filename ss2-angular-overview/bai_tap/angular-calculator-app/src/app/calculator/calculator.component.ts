import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  calculation(number1: string, number2: string, operation: string) {
    switch (operation) {
      case '+':
        this.result = Number(number1) + Number(number2);
        break;
      case '-':
        this.result = Number(number1) - Number(number2);
        break;
      case '*':
        this.result = Number(number1) * Number(number2);
        break;
      case '/':
        this.result = Number(number1) / Number(number2);
        break;
    }
  }


}
