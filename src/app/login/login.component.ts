import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  login: string;
  password: string;
  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  ngOnInit() {
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }

  loginWithEmail() {
    if (!this.login || !this.password) {
      return;
    }
    this.authService.loginWithEmail(this.login, this.password);
    this.router.navigate(['/']);
  }

}
