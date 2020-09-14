import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators'
import { BehaviorSubject, Observable } from 'rxjs';
import { UserI } from 'src/app/models/user.model';
import { JwtResponseI } from 'src/app/models/jwt-response.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceProxyService {
  
  baseUrl: string = `https://us-central1-code-challenge-e9f47.cloudfunctions.net/app`;
  authSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  token: string = '';

  constructor(private httpClient: HttpClient) { }


  login(user: UserI){

    return this.httpClient.post<JwtResponseI>(`${this.baseUrl}/token`,
      user).pipe(tap(
        (res: any) => {
          if (res) {
            // guardar token
            this.saveToken(res.accessToken);
          }
        })
      );
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  private saveToken(authToken: string) {
    localStorage.setItem('AUTH_TOKEN', authToken);
    this.token = authToken;
  }

  getToken(): string{
    return this.token;
  }

}
