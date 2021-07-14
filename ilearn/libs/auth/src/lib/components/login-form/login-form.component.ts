import { Component, EventEmitter, Output } from '@angular/core';
import { Authenticate } from '@ilearn/data-models';
import { Observable } from 'rxjs';

@Component({
  selector: 'ilearn-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent{
  user!: Observable<firebase.User>;
  
  @Output() submit = new EventEmitter<Authenticate>();

  // login(authenticate: Authenticate) {
  //   this.submit.emit();
  //   this.submit.emit(authenticate);
  // }

  login() {
    this.submit.emit();
  }

  logout() {
    this.submit.emit();
  }

}
