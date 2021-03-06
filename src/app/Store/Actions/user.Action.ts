import { Action } from '@ngrx/store';
import { user } from '../model';
/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum userActionTypes {
    allUsers = 'get/user/all'
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful 
 * type checking in reducer functions.
 */

export class allUsers implements Action {
    readonly type = userActionTypes.allUsers;
    constructor(public payload: user[]) { }
}


/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type userActions = allUsers;
