import { NotiComponent } from './noti.component';
import { PrimengNotificationComponent } from './primeng-notification/primeng-notification.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { GrowlModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { NotificationsModule } from './notifications/notifications.module';
import { reducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    NotiComponent,
    PrimengNotificationComponent
  ],
  imports: [
    BrowserModule,
    GrowlModule,
    StoreModule.forRoot({}),
    NotificationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
