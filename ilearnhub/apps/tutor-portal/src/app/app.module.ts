import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreAuthModule } from '@ilearnhub/core/auth';
import { CoreUiLayoutModule } from '@ilearnhub/core/ui/layout';
import { CoreMaterialModule } from '@ilearnhub/core/material';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'tutor/dashboard',
        loadChildren: () =>
          import('@ilearnhub/core/ui/layout').then(
            (esModule) => esModule.CoreUiLayoutModule
          ),
      },
    ],
  },
  // {
  //   path: 'tutor',
  //   loadChildren: () =>
  //     import('@ilearnhub/core/ui/layout').then(
  //       (module) => module.CoreUiLayoutModule
  //     ),
  // },
  {
    path: 'tutor',
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
    CoreUiLayoutModule,
    CoreMaterialModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' })
    // RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
