import { createAction, props } from "@ngrx/store";

export const getJokesStart = createAction('startGettingJokes');
export const getJokesSuccess = createAction('GettingJokesSuccess', props<{response: any}>());
export const getJokesError = createAction('GettingJokesError', props<{error: string}>());
