import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { Notification } from './notification';

import * as fromNotifications from './notifications-reducer';
import * as NotificationsActions from './notifications-actions';

@Injectable()
export class NotificationsService {


  constructor(private store: Store<fromNotifications.State>) {}


  public showError(summary: string, msg: string) {
    this.showNotification('error', summary, msg);
  }

  public showInfo(summary: string, msg: string) {
    this.showNotification('info', summary, msg);
  }

  public showWarning(summary: string, msg: string) {
    this.showNotification('warn', summary, msg);
  }

  private showNotification(severity: string, summary: string, msg: string) {
    const notification: Notification = {
      severity: severity,
      summary: summary,
      detail: msg
    };
    console.log('Lanzo el dispatch ' + notification.detail);
    this.store.dispatch(new NotificationsActions.ShowNotification(notification));
  }

}
