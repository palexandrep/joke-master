import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { Route } from '@angular/router';

export const SETTINGS_ROUTE: Route = {
  path: 'settings',
  component: SettingsComponent
}

@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SettingsModule { }
