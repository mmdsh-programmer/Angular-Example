import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  infoForm = this.fb.group(
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
);
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submitForm() {
    console.log(this.infoForm.value);
  }

  get name() {
    return this.infoForm.get('info.firstName');
  }

  get mobile() {
    return this.infoForm.get('contactInfo.mobile');
  }
}
