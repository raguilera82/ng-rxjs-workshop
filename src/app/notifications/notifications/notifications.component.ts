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

  constructor(public service: NotificationsService) { }

  ngOnInit() {
    this.notification$ = this.service.getNotification();
  }

  showError() {
    this.service.showError('Error', 'Error in the component');
  }

  showInfo() {
    this.service.showInfo('Info', 'Info in the component');
  }

  showWarn() {
    this.service.showWarning('Warn', 'Warning in the component');
  }

}
