import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-profile',
  template: `
   <app-page-base>
     <router-outlet></router-outlet>
   </app-page-base>
  `,
  styles: [
  ]
})
export class PageProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
