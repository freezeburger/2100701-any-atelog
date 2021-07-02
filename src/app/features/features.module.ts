import { NgModule } from '@angular/core';
import { RoomModule } from './room/room.module';
import { LoginModule } from './login/login.module';
// import { ProfileModule } from './profile/profile.module';
import { MessageModule } from './message/message.module';


@NgModule({
  exports: [
    RoomModule,
    LoginModule,
    // ProfileModule,
    MessageModule
  ]
})
export class FeaturesModule { }
