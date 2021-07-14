import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { CoreMaterialModule } from '@ilearnhub/core/material';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component'

export const coreAuthRoutes: Route[] = [{ path: 'login', component: LoginComponent }];

@NgModule({
  imports: [CommonModule, RouterModule, CoreMaterialModule],
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
