import { getJokesSuccess } from './data.actions';
import { Action, createReducer, on } from "@ngrx/store";
import { DataState } from "./data.state";

export const DATA_FEATURE_KEY = 'dataManagment';

export const defaultState: DataState = {error: false, amount: 0, jokes: []}

const reducer = createReducer(defaultState,
    on(getJokesSuccess, (state, action) =>
      (
        {
          ...state,
          jokes: [action.response.joke]
        }
        )
    )
  )

  export function dataManagmentReducer(state: DataState | undefined, action: Action): DataState {
    return reducer(state, action)
  }
