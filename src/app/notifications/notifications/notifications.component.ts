import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Notification } from './../notification';
import { NotificationsService } from './../notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationsComponent implements OnInit {

  msgs: Notification[];
  notification$: Observable<Notification>;

  constructor(private service: NotificationsService) { }

  ngOnInit() {
    this.notification$ = this.service.getNotification();
  }

  showError() {
    this.service.showError('Error', 'Error in the component');
  }

}
