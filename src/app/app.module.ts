import { NotiComponent } from './noti/noti.component';
import { GrowlModule } from 'primeng/primeng';
import { PrimengNotificationComponent } from './primeng-notification/primeng-notification.component';
import { RouterModule, Routes } from '@angular/router';
import { NotificationsModule } from './notifications/notifications.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

const ROUTES: Routes = [
  {path: 'noti', loadChildren: './notifications/notifications.module#NotificationsModule'}
];

@NgModule({
  declarations: [
    AppComponent, PrimengNotificationComponent, NotiComponent
  ],
  imports: [
    BrowserModule,
    GrowlModule,
    NotificationsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
