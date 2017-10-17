import { NotificationsService } from './notifications.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications/notifications.component';
import {GrowlModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    GrowlModule
  ],
  providers: [NotificationsService],
  exports: [NotificationsComponent],
  declarations: [NotificationsComponent]
})
export class NotificationsModule { }
