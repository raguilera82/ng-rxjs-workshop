import * as NotificationsActions from './notifications-actions';
import { Notification } from './notification';

export interface State {
    notification: Notification;
}

const initialState: State = {
    notification: null
};

export function reducer(state = initialState, action: NotificationsActions.All): State {
    switch (action.type) {
        case NotificationsActions.SHOW_NOTIFICATION: {
            return {
                ...state,
                notification: action.payload
            };
        }

        default: {
            return state;
        }

    }
}
