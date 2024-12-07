import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    if (this.authService.getLoginStatus(this.email, this.password)) {
      this.router.navigate(['/home']);
    }
    else alert("Auth Service validation failed");
  }

}
