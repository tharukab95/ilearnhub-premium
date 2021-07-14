import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { CoreMaterialModule } from '@ilearnhub/core/material'

export const coreAuthRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule, CoreMaterialModule],
})
export class CoreAuthModule {}
