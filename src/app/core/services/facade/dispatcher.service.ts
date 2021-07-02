import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActionTechnical } from '../../actions/action-technical.enum';
import { ApplicationState } from '../../interfaces/application-state';
import { Action } from '../../interfaces/technical/action';
import {Dispatcher} from '../../interfaces/technical/dispatcher'
import { RoomManagerService } from '../functionnal/room-manager.service';
import { UserManagerService } from '../functionnal/user-manager.service';
import { BrowserManagerService } from '../technical/browser-manager.service';

@Injectable({
  providedIn: 'root'
})
export class DispatcherService implements Dispatcher<ApplicationState> {

  // state$ = new Observable<ApplicationState>();
  state$ = combineLatest([
    this.userSrv.data$,
    this.roomSrv.data$,
    this.browserService.data$
  ])
  .pipe(
    map( obs$ => Object.assign({}, ...obs$) )
  )

  action$ = new BehaviorSubject<Action>({type:ActionTechnical.APP_INIT,data:null});

  constructor(
    private userSrv:UserManagerService,
    private roomSrv:RoomManagerService,
    private browserService:BrowserManagerService
  ) { }

  dispacth(action: Action): void {
    console.table(action);
    this.action$.next(action);
  }

}
