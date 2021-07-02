import { Component, Inject } from '@angular/core';
import { ActionRoom } from './core/actions/action-room.enum';
import { ActionUser } from './core/actions/action-user.enum';
import { DispatcherService } from './core/services/facade/dispatcher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
