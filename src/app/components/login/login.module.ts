import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { MaterialModule } from '../../material.module'



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ],
  providers: []
})
export class LoginModule { }
