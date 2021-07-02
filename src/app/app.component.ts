import { Component, Inject } from '@angular/core';
import { ActionRoom } from './core/actions/action-room.enum';
import { ActionUser } from './core/actions/action-user.enum';
import { DispatcherService } from './core/services/facade/dispatcher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    // @Inject(DispatcherService) public dispatcher:DispatcherService
    public dispatcher:DispatcherService
  ){

    this.dispatcher.dispacth({type:ActionRoom.ROOM_GET_LIST, data:null})

  }

  connect(){
    this.dispatcher.dispacth({type:ActionUser.USER_CONNECT, data:null})
  }

}
