import { Component, EventEmitter, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'ilearnhub-main-nav-menu',
  templateUrl: './main-nav-menu.component.html',
  styleUrls: ['./main-nav-menu.component.css']
})
export class MainNavMenuComponent {
  @Output() mainNavMenuComponentChange = new EventEmitter<string>();

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public auth: AuthService) {}

  navigateTo(feature: string) {
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
