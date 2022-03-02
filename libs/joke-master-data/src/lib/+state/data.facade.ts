import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { getJokesStart } from "./data.actions";
import { getJokes } from "./data.selector";

@Injectable()

export class DataFacade {

  public jokes$: Observable<any>

  constructor(private store: Store){
    this.jokes$ = this.store.select(getJokes)
  }

  public getJokes(): void {
      this.store.dispatch( getJokesStart() );
  }

}
