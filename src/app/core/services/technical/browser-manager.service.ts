import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Manager } from '../../interfaces/technical/manager';
import { TechnicalState } from '../../interfaces/technical/technical-state';

@Injectable({
  providedIn: 'root'
})
export class BrowserManagerService implements Manager<TechnicalState>{

  private state:TechnicalState = {
    online:true,
    position:null,
    userAgent:''
  }

  data$ = new BehaviorSubject<TechnicalState>(this.state);

  constructor() {
    setInterval( () => this.toggle() , 2000 )
  }

  private toggle(){
    this.state.online = !this.state.online;
    this.data$.next(this.state);
  }

}
