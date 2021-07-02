import { Component, OnInit } from '@angular/core';
import { ActionUser } from 'src/app/core/actions/action-user.enum';
import { DispatcherService } from 'src/app/core/services/facade/dispatcher.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    // @Inject(DispatcherService) public dispatcher:DispatcherService
    public dispatcher:DispatcherService
  ){}

  connect(){
    this.dispatcher.dispacth({type:ActionUser.USER_CONNECT, data:null})
  }

}
