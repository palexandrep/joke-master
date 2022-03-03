import { DataService } from './data.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, Observable, of, switchMap } from "rxjs";
import { getJokesError, getJokesStart, getJokesSuccess } from "./data.actions";
import { Action } from '@ngrx/store';

@Injectable()
export class DataEffects {
  public getJokes$: Observable<Action> = createEffect(() =>
  this.actions$.pipe(
    ofType(getJokesStart),
    switchMap(() =>
      this.dataService.getJokes().pipe(
        map((res: any) =>
          getJokesSuccess({response:res}),
        ),
        catchError((error: Error) =>
          of(getJokesError({ error })),
        ),
      ),
    ),
  ),
);

  constructor(private actions$: Actions, private dataService: DataService) {

  }
}
