import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectModule } from './effect.module';
import { RoomEffect } from './services/facade/room.effect';
import { RouterEffect } from './services/facade/router.effect';
import { UserEffect } from './services/facade/user.effect';

@NgModule({
  imports:[
    HttpClientModule,
    EffectModule.registerEffects([UserEffect ,RoomEffect,RouterEffect ])
  ]
})
export class CoreModule {}

