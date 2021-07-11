import { Component, EventEmitter, Output } from '@angular/core';
import { Authenticate } from '@ilearnhub/data-models';

@Component({
  selector: 'ilearnhub-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  @Output() submit = new EventEmitter<Authenticate>();

  login(authenticate: Authenticate) {
    this.submit.emit(authenticate);
  }

}
