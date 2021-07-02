import { Component, OnInit } from '@angular/core';
import { ActionRoom } from 'src/app/core/actions/action-room.enum';
import { DispatcherService } from 'src/app/core/services/facade/dispatcher.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  constructor(
    public dispatcher:DispatcherService
  ){}

  ngOnInit(){
    this.dispatcher.dispacth({type:ActionRoom.ROOM_GET_LIST, data:null})
  }

}
