import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /*infoForm = this.fb.group(
  {
    address: this.fb.group({
      text: [''],
      geo : this.fb.group({
        latitude: [''],
        longitude: [''],
      })
    }),

    info: this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['']
    }),

    contactInfo: this.fb.group({
      mobile: ['', [Validators.required, Validators.minLength(11)]],
      phone: [''],
      fax: this.fb.group({
        office: [''],
        headq: ['']
      })
    })
  }
);*/

  loginForm = this.fb.group({
    username: ['', [Validators.required , Validators.minLength(4) , Validators.maxLength(32)]],
    password: ['', [Validators.required , Validators.minLength(6) , Validators.maxLength(64)]]
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submitForm() {
    console.log(this.loginForm.value);
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
