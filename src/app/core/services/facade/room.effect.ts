import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ActionRoom } from '../../actions/action-room.enum';
import { Effect} from '../../interfaces/technical/effect';
import { RoomManagerService } from '../functionnal/room-manager.service';
import { DispatcherService } from './dispatcher.service';

@Injectable({
  providedIn: 'root'
})
export class RoomEffect implements Effect<RoomManagerService> {

  constructor(
    public service:RoomManagerService,
    public dispatcher:DispatcherService
  ){
    this.dispatcher.action$
    .pipe(
      filter( this.byType )
    )
    .subscribe(
      action => console.table(action)
    )
  }

  byType(action: any): boolean {
    return  (Object.values(ActionRoom)).includes( action.type )
  }

}

