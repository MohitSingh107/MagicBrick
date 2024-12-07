import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  constructor(private router: Router) {
    // Check login status on initialization
    this.loggedIn = localStorage.length == 2;
  }

  getLoginStatus(email: string, password: string) {
    if (email != '' && password != '') {

      if (localStorage.getItem("email") == email && localStorage.getItem("password") == password) {
        this.loggedIn = true;
        return true;
      }

    }
    else {

      alert("One or more fields are empty.")

    }

    return false;
  }

  logout() {
    localStorage.clear();
    this.loggedIn = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
