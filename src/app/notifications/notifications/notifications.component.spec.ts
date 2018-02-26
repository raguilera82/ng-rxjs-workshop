import { NotificationsService } from './../notifications.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsComponent } from './notifications.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import * as fromNotifications from './../notifications-reducer';
import * as NotificationsActions from './../notifications-actions';
import { Notification } from './../notification';

fdescribe('NotificationsComponent', () => {
  let store: Store<any>;
  let component: NotificationsComponent;
  let fixture: ComponentFixture<NotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(fromNotifications)],
      declarations: [ NotificationsComponent ],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    store = TestBed.get(Store);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set notification', () => {
    const notification: Notification = {
      severity: 'error',
      summary: 'Test summary',
      detail: 'Test detail'
    };
    const action = new NotificationsActions.ShowNotification(notification);

    store.dispatch(action);

    component.ngOnInit();

    store.subscribe(state => console.log(state));

    component.notification$.subscribe(noti => {
      console.log(noti);
    });

  });

});
 