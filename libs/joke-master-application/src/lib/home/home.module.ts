import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Route } from '@angular/router';

export const HOME_ROUTE: Route = {
  path: 'home',
  component: HomeComponent
}

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class HomeModule { }
