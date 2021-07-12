import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AngularFireModule } from '@angular/fire';

export const authRoutes: Route[] = [{ path: 'login', component: LoginComponent }];

const firebaseConfig = {
  apiKey: "AIzaSyDb4dsv6-BJX6kSOUm2uchnae46-RRS9Xc",
  authDomain: "ilearnhub-5e8a6.firebaseapp.com",
  projectId: "ilearnhub-5e8a6",
  storageBucket: "ilearnhub-5e8a6.appspot.com",
  messagingSenderId: "706373149059",
  appId: "1:706373149059:web:b79d568b104e594b1596b6",
  measurementId: "G-3QE59BB2QS"
};
@NgModule({
  imports: [CommonModule, RouterModule,
    AngularFireModule.initializeApp(firebaseConfig, 'ilearnhub')],
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
})
export class AuthModule {}
