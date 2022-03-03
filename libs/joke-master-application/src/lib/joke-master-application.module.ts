import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { RouterModule } from '@angular/router';
import { SettingsModule, SETTINGS_ROUTE } from './settings/settings.module';
import { HomeModule, HOME_ROUTE } from './home/home.module';
import { JokeMasterDataModule } from '@joke-master-data';

@NgModule({
  imports: [
    SettingsModule,
    HomeModule,
    CommonModule,
    JokeMasterDataModule,
    RouterModule.forChild([{
      path: '',
      component: ContainerComponent,
      children: [
        SETTINGS_ROUTE,
        HOME_ROUTE
      ]
    }]),
  ],
  declarations: [
    ContainerComponent
  ],
})
export class JokeMasterApplicationModule {}
