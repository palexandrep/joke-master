import { DataFacade } from '@joke-master-data';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'joke-master-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public jokes$: Observable<any>;

  constructor(private dataFacade: DataFacade) {
    this.jokes$ = this.dataFacade.jokes$
   }

  ngOnInit(): void {
    this.dataFacade.getJokes();
  }

}
