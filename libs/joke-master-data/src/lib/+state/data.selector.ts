import { DataState } from './data.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DATA_FEATURE_KEY } from './data.reducer';

export const dataState = createFeatureSelector<DataState>(DATA_FEATURE_KEY)

export const getJokes = createSelector(dataState, (state) =>

  state.jokes

)
