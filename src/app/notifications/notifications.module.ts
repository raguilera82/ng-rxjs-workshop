import { NotificationsService } from './notifications.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications/notifications.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {path: '', component: NotificationsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  providers: [NotificationsService],
  exports: [NotificationsComponent],
  declarations: [NotificationsComponent]
})
export class NotificationsModule { }
