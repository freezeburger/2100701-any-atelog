import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { DispatcherService } from 'src/app/core/services/facade/dispatcher.service';

@Component({
  selector: 'app-page-base',
  templateUrl: './page-base.component.html',
  styleUrls: ['./page-base.component.scss']
})
export class PageBaseComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private dispatcher: DispatcherService,
  ) { }


  pageTitle: string = this.route.snapshot.routeConfig?.path as string | '404';
  @Input() subTitle = '';
  navigationLinks = this.router.config.map(conf => conf.path).filter(path => path != '**')

  ngOnInit(): void {

    this.dispatcher.state$.subscribe( state => state.online === false && this._snackBar.open('Connection Lost', 'Close'))

    console.groupCollapsed('Routing')
      console.table(
        this.navigationLinks
      )
      console.table(
        this.router.config
      )
      console.log(
        this.router.url,
        //this.router.getCurrentNavigation()
        this.route.snapshot.routeConfig
      )
    console.groupEnd()
  }

}
