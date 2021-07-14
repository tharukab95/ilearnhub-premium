import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
@Component({
  selector: 'ilearn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  user!: Observable<firebase.User>;

  constructor(public auth: AngularFireAuth) {}

  ngOnInit(): void {

  }

  // login() {
  //   this.authService.login(authenticate).subscribe();
  // }

  GoogleAuth() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  AuthLogin(provider: any) {
    return this.auth.signInWithPopup(provider)
    .then((result) => {
      this.user = result;
        console.log('You have been successfully logged in!');
        console.log(result);
    }).catch((error) => {
        console.log(error)
    })
  }

  logout() {
    this.auth.signOut();
  }

}
