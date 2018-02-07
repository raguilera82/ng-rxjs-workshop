import { NotificationsService } from './notifications/notifications.service';
import { NotificationsComponent } from './notifications/notifications/notifications.component';
import { Component } from '@angular/core';
import * as fromRoot from './reducers';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-noti',
    template: `<button (click)="showError()">Show Error</button>
                <p *ngIf="(notification$ | async)">{{notification$ | async | json}}</p>`
})
export class AppNotiComponent extends NotificationsComponent {

    constructor(
        public notiService: NotificationsService,
        public store: Store<fromRoot.State>) {
            super(notiService, store);
    }

    showError() {
        this.notiService.showError('Error noti', 'Error desde noti');
    }

}
