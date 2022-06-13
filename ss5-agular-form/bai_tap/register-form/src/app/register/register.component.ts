import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Register} from '../register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: Register[] = [];
  registerForm: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
        country: new FormControl('', Validators.required),
        age: new FormControl('', [Validators.required, Validators.min(18)]),
        gender: new FormControl('', Validators.required),
        phone: new FormControl('', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)]),
      }, [this.checkPassword]
    );
  }

  ngOnInit(): void {
  }

  checkPassword(obj: AbstractControl) {
    const password = obj.get('password').value;
    const confirmPassword = obj.get('confirmPassword').value;
    if (password !== confirmPassword) {
      return {invalid0: true};
    } else {
      return null;
    }
  }

  createRegister() {
    console.log(this.registerForm);
    if (this.registerForm.valid) {
      this.register.push(this.registerForm.value);
    }
  }
}
