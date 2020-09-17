import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRoutingModule } from './login-routing.module';
import { LoginServiceProxyService } from './login-service-proxy.service';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { MaterialModule } from 'src/app/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de;
  let el;
  let dom = document.getElementsByTagName('body');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, ReactiveFormsModule, RouterTestingModule, MaterialModule, BrowserAnimationsModule],
      declarations: [ LoginComponent ],
      providers: [LoginServiceProxyService]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
    el = de.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a form', () => {
    expect(document.getElementsByTagName('form')).toBeTruthy();
  })

  it('should display Login text', () => {
    expect(el.textContent).toContain('Login');
  })
});
