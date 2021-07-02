import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RoomState } from '../../interfaces/functionnal/room-state';
import { Manager } from '../../interfaces/technical/manager';

@Injectable({
  providedIn: 'root'
})
export class RoomManagerService implements Manager<RoomState>{

  private state:RoomState = {
      rooms:[]
  }

  data$= new BehaviorSubject<RoomState>(this.state);

  constructor() { }

  // Methods

}
