import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route, Routes } from '@angular/router';
import { CoreMaterialModule } from '@ilearnhub/core/material';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component'
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export const coreAuthRoutes: Route[] = [{ path: 'login', component: LoginComponent }];

const routes: Routes = [
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule, RouterModule.forChild(routes),
    CoreMaterialModule,
    AuthModule.forRoot({
      domain: 'dev-sjnp1nxu.us.auth0.com',
      clientId: 'bWMNLJaKFhFuowYxNkGmzSwy8ZmO7777',
      redirectUri: window.location.origin,
      scope: 'openid profile email read:posts write:posts delete:posts',
      // The AuthHttpInterceptor configuration
      httpInterceptor: {
        allowedList: [
          '/api/*',
        ],
      },
    })],
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  exports: [
    LoginComponent,
    LoginFormComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
  ],
})
export class CoreAuthModule {}
