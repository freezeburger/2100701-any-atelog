import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserState } from '../../interfaces/functionnal/user-state';
import { Manager } from '../../interfaces/technical/manager';

@Injectable({
  providedIn: 'root'
})
export class UserManagerService implements Manager<UserState>{

  private state:UserState = {
    connectedUser:null,
    users:[]
  }
  data$ = new  BehaviorSubject<UserState>(this.state);

  constructor() { }

}
