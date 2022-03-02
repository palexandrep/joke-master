import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Route } from '@angular/router';
import { JokeMasterDataModule } from '@joke-master-data';

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
    JokeMasterDataModule
  ]
})
export class HomeModule { }
