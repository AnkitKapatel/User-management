import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
    isAuthenticated: boolean = false;
    isAuthenticated$: Subject<boolean> = new BehaviorSubject<boolean>(false);
    username;
    constructor(private router: Router) { 
        const isAuthStr = localStorage.getItem('isAuthenticated');
        if(isAuthStr && JSON.parse(isAuthStr)) {
            this.isAuthenticated = true;
            this.isAuthenticated$.next(true);
            this.username = localStorage.getItem('username');
        }
    }
    
    // setLoginStatus(value:any) {
    //   this.isAuthenticated = value;
    //   localStorage.setItem('loggedIn', 'true');
    // }

    getUserName() {
      if(!this.getUserName) {
          this.username = localStorage.getItem('username');
      } 
      return this.username;
    }
    login(username: string) {
        this.isAuthenticated = true;
        this.isAuthenticated$.next(true);
        this.username = username;
        localStorage.setItem('isAuthenticated','true');
        localStorage.setItem('username', username);
    }

    
    logout() {
        this.isAuthenticated = false;
        this.isAuthenticated$.next(false);
        localStorage.setItem('isAuthenticated','false');
        localStorage.removeItem('username');
        this.router.navigate(['login']);
    }
}