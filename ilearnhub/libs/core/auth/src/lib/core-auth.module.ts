import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route, Routes } from '@angular/router';
import { CoreMaterialModule } from '@ilearnhub/core/material';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component'
import { AuthModule } from '@auth0/auth0-angular';

export const coreAuthRoutes: Route[] = [{ path: 'login', component: LoginComponent }];

const routes: Routes = [
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'success',
    pathMatch: 'full',
    component: LoginFormComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule, RouterModule.forChild(routes),
    CoreMaterialModule,
    AuthModule.forRoot({
      domain: 'dev-sjnp1nxu.us.auth0.com',
      clientId: 'bWMNLJaKFhFuowYxNkGmzSwy8ZmO7777'
    })],
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  exports: [
    LoginComponent,
    LoginFormComponent
  ]
})
export class CoreAuthModule {}
