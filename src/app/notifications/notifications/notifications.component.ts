import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Notification } from './../notification';
import { NotificationsService } from './../notifications.service';

import * as fromNotifications from './../notifications-reducer';
import { Store } from '@ngrx/store';
import * as NotificationsActions from './../notifications-actions';
import * as fromRoot from './../../reducers';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationsComponent implements OnInit {

  msgs: Notification[];
  notification$: Observable<Notification>;

  constructor(
    public store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.notification$ = this.store.select(state => state.notifications.notification);
  }

}
