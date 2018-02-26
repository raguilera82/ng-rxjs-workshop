import { NotificationsService } from './../notifications/notifications.service';
import { NotificationsComponent } from './../notifications/notifications/notifications.component';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-noti',
    template: `<button (click)="showInfo()">Show Info</button>
                <app-primeng-notification [notification]="(notification$ | async)"></app-primeng-notification>`
})
export class NotiComponent extends NotificationsComponent implements OnInit {

    constructor(public service: NotificationsService) {
        super(service);
    }

    ngOnInit() {
        this.notification$ = this.service.getNotification();
    }

    showInfo() {
        this.service.showInfo('Info', 'Info in the noti component');
    }

}
