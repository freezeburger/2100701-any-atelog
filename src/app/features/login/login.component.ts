import { Component, OnInit } from '@angular/core';
import { userConnect } from 'src/app/core/actions/action-creators';
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
    this.dispatcher.dispacth( userConnect( {name:'Renaud',password:''}) );
  }

}
