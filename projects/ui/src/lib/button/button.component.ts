import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  color = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

}
