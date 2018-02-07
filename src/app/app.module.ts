import { AppNotiComponent } from './app-noti.component';
import { reducers } from './reducers';
import { StoreModule } from '@ngrx/store';
import { NotificationsModule } from './notifications/notifications.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNotiComponent
  ],
  imports: [
    BrowserModule,
    NotificationsModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
