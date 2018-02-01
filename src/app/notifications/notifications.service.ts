import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { Notification } from './notification';

export class NotificationsService {

  notificationSubject: ReplaySubject<Notification> = new ReplaySubject();

  getNotification(): Observable<Notification> {
    return this.notificationSubject.asObservable();
  }

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

    this.notificationSubject.next(notification);
  }

}
