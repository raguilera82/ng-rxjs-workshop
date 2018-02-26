import { Store } from '@ngrx/store';
import { NotificationsComponent } from './notifications/notifications/notifications.component';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import * as fromRoot from './reducers';
import * as fromNotifications from './notifications/notifications-reducer';

@Component({
    selector: 'app-noti',
    template: `<app-primeng-notification [notification]="notification$ | async"></app-primeng-notification>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotiComponent extends NotificationsComponent {
    constructor(
        public store: Store<fromNotifications.State>) {
            super(store);
    }
}
