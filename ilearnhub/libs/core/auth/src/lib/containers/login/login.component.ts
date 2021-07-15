import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'ilearnhub-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService) {
    auth.loginWithRedirect();
  }

  ngOnInit(): void {
    console.log("login page");
  }

}
