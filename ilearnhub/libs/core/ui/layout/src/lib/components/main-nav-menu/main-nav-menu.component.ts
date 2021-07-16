import { Component, EventEmitter, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'ilearnhub-main-nav-menu',
  templateUrl: './main-nav-menu.component.html',
  styleUrls: ['./main-nav-menu.component.scss']
})
export class MainNavMenuComponent {
  @Output() mainNavMenuComponentChange = new EventEmitter<string>();
  isMainNavClosed = false;
  selectedMenuItem = 'Dashboard'

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public auth: AuthService) {}

  toggleMenu() {
    this.isMainNavClosed == !this.isMainNavClosed;
  }

  navigateTo(feature: string) {
    this.selectedMenuItem = feature;
    this.mainNavMenuComponentChange.emit(feature);
    // switch (feature) {
    //   case 'dashboard':

    //     break;
    //     case 'class':

    //       break;
    //       case 'settings':

    //     break;
    //   default:
    //     break;
    // }
  }

}
