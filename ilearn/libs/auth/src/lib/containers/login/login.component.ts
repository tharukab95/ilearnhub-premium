import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ilearn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("login...");
  }

  login(authenticate:any) {
    console.log(authenticate);
  }

}
