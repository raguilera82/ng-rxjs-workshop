import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import * as fromNotifications from './notifications-reducer';
import { NotificationsService } from './notifications.service';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('notifications', fromNotifications.reducer)
  ],
  providers: [NotificationsService],
  exports: [NotificationsComponent],
  declarations: [NotificationsComponent]
})
export class NotificationsModule { }
