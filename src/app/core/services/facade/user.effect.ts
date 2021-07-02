import { Injectable } from '@angular/core';
import { filter, mergeMap } from 'rxjs/operators';
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

    // this.dispacther.action$.pipe( filter( this.byType ) ).subscribe(action => console.table(action) );

    this.dispacther.action$
        .pipe(
            // filter( this.byType ),
            filter( ({type}) => type ===ActionUser.USER_CONNECT ),
            mergeMap( ({data}) => this.userSrv.login(data) )
          )
          .subscribe(
            success => this.dispacther.dispacth({
              type: (success ? ActionUser.USER_CONNECT_SUCCES :  ActionUser.USER_CONNECT_FAILURE),
              data:null
            })
          );

  }

  byType(action:any){
    return (Object.values(ActionUser)).includes( action.type )
  }

}

