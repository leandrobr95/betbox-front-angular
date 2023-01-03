import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  passwordVisible!: boolean;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.buildLoginForm();
  }

  buildLoginForm(): FormGroup {
    return this.formBuilder.group(
      {
        emailUsuario: [null, [Validators.required]],
        senhaUsuario: [null, [Validators.required]]
      }
    );
  }

  login(): void { }

}
