import { Component, OnInit, EventEmitter, Output } from '@angular/core';

export interface Authenticate {
  username: string;
  password: string;
}

@Component({
  selector: 'ilearnhub-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {
  @Output() loginFormChange = new EventEmitter<Authenticate>();

  constructor() { }

  ngOnInit(): void {
  }

  login(authenticate: Authenticate) {
    this.loginFormChange.emit(authenticate);
  }

}
