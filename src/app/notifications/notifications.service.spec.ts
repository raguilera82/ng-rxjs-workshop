import { inject, TestBed } from '@angular/core/testing';
import { combineReducers, Store, StoreModule } from '@ngrx/store';

import { Notification } from './notification';
import * as NotificationsActions from './notifications-actions';
import * as fromNotifications from './notifications-reducer';
import { NotificationsService } from './notifications.service';

describe('NotificationsService', () => {

  let store: Store<fromNotifications.State>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          'notifications': combineReducers(fromNotifications.reducer)
        })],
      providers: [NotificationsService]
    });

    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();

  });

  it('should be created', inject([NotificationsService], (service: NotificationsService) => {
    expect(service).toBeTruthy();
  }));

  it('should create notification', () => {
    const notification: Notification = {
      severity: 'error',
      summary: 'Test summary',
      detail: 'Test detail'
    };

    const action = new NotificationsActions.ShowNotification(notification);

    const service: NotificationsService = TestBed.get(NotificationsService);
    service.showError(notification.summary, notification.detail);
    expect(store.dispatch).toHaveBeenCalledWith(action);
    expect(store).toBeDefined();

  });

});
