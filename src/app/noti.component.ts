import { Store } from '@ngrx/store';
import { NotificationsComponent } from './notifications/notifications/notifications.component';
import { Component } from '@angular/core';
import * as fromRoot from './reducers';

@Component({
    selector: 'app-noti',
    template: `<app-primeng-notification [notification]="notification$ | async"></app-primeng-notification>`
})
export class NotiComponent extends NotificationsComponent {
    constructor(
        public store: Store<fromRoot.State>) {
            super(store);
    }
}
