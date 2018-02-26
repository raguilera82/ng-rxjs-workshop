import { NotificationsService } from './notifications/notifications.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private notiService: NotificationsService) {}

  showError() {
    this.notiService.showError('Error', 'Error in the component');
  }

  showInfo() {
    this.notiService.showInfo('Info', 'Info in the component');
  }

  showWarn() {
    this.notiService.showWarning('Warn', 'Warning in the component');
  }

}
