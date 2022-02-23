import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'joke-master-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor(private router: Router) { }

  public navigateTo(pageName: string): void {
    console.log(pageName);
    this.router.navigate([pageName]);
  }

  ngOnInit(): void {
  }

}
