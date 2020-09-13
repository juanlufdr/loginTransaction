import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceProxyService } from './login-service-proxy.service';
import { UserI } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private loginServie: LoginServiceProxyService) { 
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {

  }

  onLoginSubmit() {
    console.log('Submit')
    const user: UserI = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value

    }
    this.loginServie.login(user).subscribe(
      (data) => {
        console.log('success', data)
      },
      (error) => {
        console.error('error');
      }
    )
  }

}
