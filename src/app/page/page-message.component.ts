import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-message',
  template: `
   <app-page-base>
     <app-message></app-message>
     <app-message-writer></app-message-writer>
   </app-page-base>
  `,
  styles: [
  ]
})
export class PageMessageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
