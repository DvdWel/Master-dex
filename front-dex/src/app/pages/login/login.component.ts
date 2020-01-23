import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface InputOptions {
  required?: boolean;
  isValid?: boolean;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  })

  onSubmit(): void {
    console.log(this.loginForm);
  }

  @Input() public options: InputOptions;
  constructor() { }

  ngOnInit() {
  }

}
