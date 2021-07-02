import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User } from '../../interfaces/functionnal/user';
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

  private readonly api =  'http://localhost:5050/users';

  constructor(
    private http:HttpClient
  ) {

    this.loadUserList().subscribe( ()=> null)

  }

  loadUserList():Observable<boolean>{
    return  this.http.get<User[]>(this.api).pipe(
      map(
        data => {
          this.state.users = data;
          this.data$.next(this.state);
          return true;
        })
      )
  }

  login( credentials:Pick<User, 'name' | 'password'>):Observable<boolean>{

    /*
    this.state.connectedUser = {id:1,name:'Bob'};
    this.data$.next(this.state);
    // GO HTTP
    return of(true);
    */

    const url = this.api + `?name=${credentials.name}`;

    return this.http.get(url).pipe(
        tap(console.warn),
        map( ([user]) =>this.updateConnectedUser(user) )
    )
  }

  private updateConnectedUser( user:User ){
      if(user) {
        this.state.connectedUser = user;
        this.data$.next(this.state);
      };
      return !!user;
  }

}
