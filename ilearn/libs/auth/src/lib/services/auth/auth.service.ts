import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user!: Observable<firebase.User>;

    constructor(
      private afAuth: AngularFireAuth) {}

    GoogleAuth() {
      this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    }

    AuthLogin(provider: any) {
      return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        this.user = result;
          console.log('You have been successfully logged in!');
          console.log(result);
      }).catch((error) => {
          console.log(error)
      })
    }

    logout() {
      this.afAuth.signOut();
    }
}
