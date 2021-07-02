import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RoomComponent } from './room/room.component';
import { RoomItemComponent } from './room-item/room-item.component';


@NgModule({
  declarations: [
    RoomComponent,
    RoomItemComponent
  ],
  imports: [
    CommonModule,
    RoomRoutingModule,
    SharedModule
  ],
  exports: [
    RoomComponent,
    RoomItemComponent
  ]
})
export class RoomModule { }
