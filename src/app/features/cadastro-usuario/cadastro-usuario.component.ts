import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: []
})
export class CadastroUsuarioComponent implements OnInit {

  userRegistrationForm!: FormGroup;
  visiblePassword!: boolean;
  visiblePasswordConfirm!: boolean;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.userRegistrationForm = this.buildUserRegistrationForm();
  }

  buildUserRegistrationForm(): FormGroup {
    return this.formBuilder.group(
      {
        userName: [null, [Validators.required]],
        userMail: [null, [Validators.required]],
        userPassword: [null, [Validators.required]],
        userPasswordConfirm: [null, [Validators.required]]
      }
    );
  }

  registerUser(): void { }

}
