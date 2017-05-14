import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Auth {

  private registerUrl: string;
  private authenticateUrl: string;

  constructor(public http: Http) {
    console.log('Hello Auth Provider');
  }

  register(user: any){
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    this.registerUrl = 'http://localhost:8080/users/register';
    return this.http.post(this.registerUrl, user, { headers: header }).map(res => res.json());
  }

  authenticate(user: any){
    console.log('User in authenticate',user);
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    this.authenticateUrl = 'http://localhost:8080/users/authenticate';
    //return this.http.post(this.authenticateUrl, user, { headers: header }).map(res => res.json());
    return {
       success: true,
       token: 'kmisdsdsndsjkdb'
    }
  }

}
