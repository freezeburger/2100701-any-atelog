import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageRoutingModule } from './message-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MessageItemComponent } from './message-item/message-item.component';
import { MessageComponent } from './message/message.component';
import { MessageWriterComponent } from './message-writer/message-writer.component';


@NgModule({
  declarations: [
    MessageItemComponent,
    MessageComponent,
    MessageWriterComponent
  ],
  imports: [
    CommonModule,
    MessageRoutingModule,
    SharedModule
  ],
  exports: [
    MessageComponent,
    MessageWriterComponent,
    MessageWriterComponent
  ]
})
export class MessageModule { }
