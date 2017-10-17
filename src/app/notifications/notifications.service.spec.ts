import { TestBed, inject } from '@angular/core/testing';

import { NotificationsService } from './notifications.service';

describe('NotificationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationsService]
    });
  });

  it('should be created', inject([NotificationsService], (service: NotificationsService) => {
    expect(service).toBeTruthy();
  }));

  it('should create notification', () => {
    const service: NotificationsService = TestBed.get(NotificationsService);
    
    service.showError('Error', 'Error detail');

    service.getNotification().subscribe(
      noti => {
        expect(noti.detail).toEqual('Error detail');
      }
    );
  });

});
