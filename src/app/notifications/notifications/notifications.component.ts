import { NotificationsService } from './../notifications.service';
import { Notification } from './../notification';
import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  msgs: Notification[];

  constructor(private service: NotificationsService) { }

  ngOnInit() {
    this.service.getNotification().subscribe(
      noti => {
        this.msgs = [];
        this.msgs = [...this.msgs, noti];
      }
    );
  }

  showError() {
    this.service.showError('Error', 'Error in the component');
  }

}
