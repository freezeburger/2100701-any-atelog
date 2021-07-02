
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ActionUser } from '../../actions/action-user.enum';
import { Effect } from '../../interfaces/technical/effect';
import { DispatcherService } from './dispatcher.service';

@Injectable({
  providedIn: 'root'
})
export class RouterEffect implements Effect<Router> {

  constructor(
    public service: Router,
    public dispatcher: DispatcherService
  ) {
    this.dispatcher.action$
      .pipe(filter(({ type }) => type === ActionUser.USER_CONNECT_SUCCES))
      .subscribe(() => this.service.navigate(['rooms']));
  }

  byType(action: any): boolean {
    throw new Error('Method not implemented.');
  }



}
