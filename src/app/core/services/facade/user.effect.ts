import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ActionUser } from '../../actions/action-user.enum';
import { UserManagerService } from '../functionnal/user-manager.service';
import { DispatcherService } from './dispatcher.service';

@Injectable({
  providedIn: 'root'
})
export class UserEffect {

  constructor(
    private dispacther:DispatcherService,
    private userSrv:UserManagerService
  ){

    this.dispacther.action$
    .pipe(
      filter( this.byType )
    )
    .subscribe(
      action => console.table(action)
    )

  }

  byType(action:any){
    return (Object.values(ActionUser)).includes( action.type )
  }

}

