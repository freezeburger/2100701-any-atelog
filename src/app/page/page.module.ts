import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesModule } from '../features/features.module';
import { SharedModule } from '../shared/shared.module';
import { PageBaseComponent } from './page-base/page-base.component';
import { PageMessageComponent } from './page-message.component';
import { PageRoomComponent } from './page-room.component';
import { PageLoginComponent } from './page-login.component';
import { PageProfileComponent } from './page-profile.component';


@NgModule({
  declarations: [
    PageBaseComponent,
    PageMessageComponent,
    PageRoomComponent,
    PageLoginComponent,
    PageProfileComponent
  ],
  imports: [
    CommonModule,
    FeaturesModule,
    SharedModule
  ]
})
export class PageModule { }
