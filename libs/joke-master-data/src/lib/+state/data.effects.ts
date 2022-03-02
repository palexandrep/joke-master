import { DataService } from './data.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";
import { getJokesStart, getJokesSuccess } from "./data.actions";

@Injectable()

export class DataEffects{

  public getJokes$ = createEffect(() =>

    {
      return this.actions$.pipe(
        ofType(
          getJokesStart,
        ),
        switchMap(() =>
          {
            return this.dataService.getJokes().pipe(
              map((res: any) =>
                getJokesSuccess({response: res})
              )
            )
          }
        )
      )
    }

  )

    constructor (private actions$: Actions, private dataService: DataService){}

}
