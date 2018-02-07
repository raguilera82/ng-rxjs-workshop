import { StoreModule } from '@ngrx/store';
import { NotificationsService } from './notifications.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications/notifications.component';
import {GrowlModule} from 'primeng/primeng';
import { PrimengNotificationComponent } from './primeng-notification/primeng-notification.component';

import * as fromNotifications from './notifications-reducer';

@NgModule({
  imports: [
    CommonModule,
    GrowlModule,
    StoreModule.forFeature('notifications', fromNotifications.reducer)
  ],
  providers: [NotificationsService],
  exports: [NotificationsComponent],
  declarations: [NotificationsComponent, PrimengNotificationComponent]
})
export class NotificationsModule { }
