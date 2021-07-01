import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { ImageComponent } from './image/image.component';
import { ImageAvatarComponent } from './image-avatar/image-avatar.component';
import { InputComponent } from './input/input.component';
import { UiMaterialModule } from './ui-material/ui-material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonComponent,
    ImageComponent,
    ImageAvatarComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UiMaterialModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Angular Material
    UiMaterialModule,
    //Component
    ButtonComponent,
    ImageComponent,
    ImageAvatarComponent,
    InputComponent
  ]
})
export class UiModule { }
