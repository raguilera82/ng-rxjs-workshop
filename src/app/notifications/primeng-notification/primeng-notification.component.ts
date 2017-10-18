import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';

import { Notification } from '../notification';

@Component({
  selector: 'app-primeng-notification',
  templateUrl: './primeng-notification.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrimengNotificationComponent implements OnChanges {

  @Input() notification: Notification;

  msgs: any;

  constructor() { }

  public ngOnChanges(): void {
    this.msgs = [];
    this.msgs = [...this.msgs, this.notification];
  }
}
