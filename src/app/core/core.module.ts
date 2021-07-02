import { NgModule } from '@angular/core';
import { EffectModule } from './effect.module';
import { RoomEffect } from './services/facade/room.effect';
import { UserEffect } from './services/facade/user.effect';

@NgModule({
  imports:[
    EffectModule.registerEffects([UserEffect ,RoomEffect ])
  ]
})
export class CoreModule {}

