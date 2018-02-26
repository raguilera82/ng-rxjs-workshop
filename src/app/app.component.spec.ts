import { NotificationsService } from './notifications/notifications.service';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { StoreModule, Store } from '@ngrx/store';
import * as fromNotifications from './notifications/notifications-reducer';
import * as fromRoot from './reducers';

describe('AppComponent', () => {

  let component: AppComponent;
  let store: Store<fromRoot.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature('notifications', fromNotifications.reducer)],
      declarations: [
        AppComponent
      ],
      providers: [NotificationsService],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    store = TestBed.get(Store);

  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    component = app;
    fixture.detectChanges();
    expect(app).toBeTruthy();
  }));

  it('should set one notification', () => {
    const detail = 'Error in the component';
    component.showError();

    store.subscribe(state => 
      console.log(state));

  });

});
