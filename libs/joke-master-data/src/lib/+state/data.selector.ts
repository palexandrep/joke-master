import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DATA_FEATURE_KEY } from "./data.reducer";
import { DataState } from "./data.state";

export const dataState = createFeatureSelector<DataState>(DATA_FEATURE_KEY);


export const getJokes = createSelector(
  dataState,
  (state) => state.jokes
)
