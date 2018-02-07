import { NotificationsService } from './notifications/notifications.service';
import { NotificationsComponent } from './notifications/notifications/notifications.component';
import { Component } from '@angular/core';
import * as fromRoot from './reducers';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-noti',
    template: `<p *ngIf="(notification$ | async)">{{notification$ | async | json}}</p>`
})
export class AppNotiComponent extends NotificationsComponent {

    constructor(
        public store: Store<fromRoot.State>) {
            super(store);
    }
    
}
