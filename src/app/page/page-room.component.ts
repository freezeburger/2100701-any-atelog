import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-room',
  template: `
   <app-page-base>
     <app-room></app-room>
   </app-page-base>
  `,
  styles: [
  ]
})
export class PageRoomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
