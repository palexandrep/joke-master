import { createAction, props } from '@ngrx/store';
export const getJokesStart = createAction(
  'StartGettingJokes'
)
export const getJokesSuccess = createAction(
  'SuccessGettingJokes',
  props<{response : any}>()
)
export const getJokesError = createAction(
  'ErrorGettingJokes',
  props<{error:Error}>()
)
