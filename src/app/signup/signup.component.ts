import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  mobile!: number;
  password: string = '';

  constructor(private router: Router) { }

  submit() {
    if (this.name != '' && this.email != '' && this.mobile != 0 && this.password != '') {
      localStorage.setItem('email', this.email);
      localStorage.setItem('password', this.password);
      this.router.navigateByUrl('/login');
    } else {
      alert('One or More fields are empty. Kindly fill them');
    }
  }
}
