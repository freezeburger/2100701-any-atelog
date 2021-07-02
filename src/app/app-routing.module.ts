import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './core/services/facade/user.guard';
import { PageLoginComponent } from './page/page-login.component';
import { PageMessageComponent } from './page/page-message.component';
import { PageProfileComponent } from './page/page-profile.component';
import { PageRoomComponent } from './page/page-room.component';

const routes: Routes = [
  {
    path:'home',
    component:PageLoginComponent
  },
  {
    path:'rooms',
    component:PageRoomComponent,
    canActivate:[UserGuard]
  },
  {
    path:'chat',
    component:PageMessageComponent,
    canActivate:[UserGuard]
  },
  {
    path:'profile',
    component:PageProfileComponent,
    canActivate:[UserGuard]
  },
  {
    path:'**',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
