import { DataService } from './+state/data.service';
import { DataFacade } from './+state/data.facade';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { DataEffects } from './+state/data.effects';
import { StoreModule } from '@ngrx/store';
import { dataManagmentReducer,  DATA_FEATURE_KEY, defaultState } from './+state/data.reducer';


@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([
      DataEffects
    ]),
    StoreModule.forFeature(DATA_FEATURE_KEY, dataManagmentReducer, {initialState: defaultState})
  ],
  providers: [
    DataFacade,
    DataService
  ]
})
export class JokeMasterDataModule {}
