import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase/app';

@Injectable()
export class Auth {

  /*private registerUrl: string;
  private authenticateUrl: string;*/

  constructor(public http: Http,
              private afAuth: AngularFireAuth
  ) {
    console.log('Hello Auth Provider');
  }

  loginUser(user: any): firebase.Promise<any>{
    let username = user.name;
    let password = user.password;
    
    console.log('In Auth user is ',user);

    return this.afAuth.auth.signInWithEmailAndPassword(username, password);
  } 

  logout(): firebase.Promise<any>{
    return this.afAuth.auth.signOut();
  }

  register(user: any): firebase.Promise<any>{
    let email = user.email;
    let password = user.password;

    console.log(user);

    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  /*register(user: any)
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
  }*/

}
