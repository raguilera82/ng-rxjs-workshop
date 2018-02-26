import { Notification } from './notification';
import { Action } from '@ngrx/store';

export const SHOW_NOTIFICATION = '[Notifications] Show';

export class ShowNotification implements Action {

    readonly type: string = SHOW_NOTIFICATION;

    constructor(public payload: Notification) {
        console.log(SHOW_NOTIFICATION);
    }

}

export type All = ShowNotification;



