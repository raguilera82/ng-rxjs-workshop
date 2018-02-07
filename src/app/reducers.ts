import * as fromNotifications from './notifications/notifications-reducer';

export interface State {
    notifications: fromNotifications.State;
}

export const reducers = {
    notifications: fromNotifications.reducer
};




