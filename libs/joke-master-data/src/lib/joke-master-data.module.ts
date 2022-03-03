import { dataManagementReducer, DATA_FEATURE_KEY, defaultState } from './+state/data.reducer';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { DataEffects } from './+state/data.effects';
import { DataFacade } from './+state/data.facade';
import { DataService } from './+state/data.service';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forRoot([DataEffects]),
    StoreModule.forFeature(
      DATA_FEATURE_KEY, dataManagementReducer, {initialState: defaultState}
    )
  ],
  providers: [DataFacade, DataService],
})

export class JokeMasterDataModule {}
