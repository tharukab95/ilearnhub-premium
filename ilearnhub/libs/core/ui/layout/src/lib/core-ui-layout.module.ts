import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { MainNavMenuComponent } from './components/main-nav-menu/main-nav-menu.component';
import { CoreMaterialModule } from '@ilearnhub/core/material';
import { CoreAuthModule } from '@ilearnhub/core/auth'
export const coreUiLayoutRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: MainComponent}
    ]),
    CoreMaterialModule,
    MatToolbarModule,
    LayoutModule,
    CoreAuthModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    MainNavMenuComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
  ],
})
export class CoreUiLayoutModule {}
