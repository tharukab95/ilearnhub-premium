import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ilearnhub-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  login(authenticate:any) {
    console.log(authenticate);
  }

}
