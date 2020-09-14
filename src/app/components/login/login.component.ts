import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceProxyService } from './login-service-proxy.service';
import { Router } from '@angular/router';
import { UserI } from 'src/app/models/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private loginServie: LoginServiceProxyService, private router: Router, private _snackBar: MatSnackBar) { 
    this.loginForm = this.fb.group({
      username: ['user', Validators.required],
      password: ['pass', Validators.required]
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
        this.router.navigate(['transactions']);
      },
      (error) => {
        console.error('error');
        const msg = `User or password incorrect`;
        this.openSnackBar(msg, 'Close');
      }
    )
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
