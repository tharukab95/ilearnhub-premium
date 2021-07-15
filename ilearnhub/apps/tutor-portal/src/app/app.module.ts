import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreAuthModule } from '@ilearnhub/core/auth';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('@ilearnhub/core/auth').then(
            (esModule) => esModule.CoreAuthModule
          ),
      },
    ],
  },
  {
    path: 'tutor-portal-feature-profile',
    loadChildren: () =>
      import('@ilearnhub/tutor-profile').then(
        (module) => module.TutorPortalFeatureProfileModule
      ),
  },
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreAuthModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
