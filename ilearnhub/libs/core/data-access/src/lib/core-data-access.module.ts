import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
export { Authenticate } from './authenticate';

export const coreDataAccessRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
})
export class CoreDataAccessModule {}
