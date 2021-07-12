import { createAction, props } from '@ngrx/store';
import { UsersEntity } from './users.models';

export enum AuthActionTypes {
  Login = '[Auth Page] Login',
  LoginSuccess = '[Auth API] Login Success',
  LoginFail = '[Auth API] Login Fail'
}

export const init = createAction('[Users Page] Init');

export const loadUsersSuccess = createAction(
  '[Users/API] Load Users Success',
  props<{ users: UsersEntity[] }>()
);

export const loadUsersFailure = createAction(
  '[Users/API] Load Users Failure',
  props<{ error: any }>()
);

// export const login = createAction(
//   AuthActionTypes.Login,
//   props<{ payload: Authenticate }> ()
// );

// export const loginSuccess = createAction(
//   AuthActionTypes.LoginSuccess,
//   props<{ payload: User }>()
// );

// export const loginFailure = createAction(
//   AuthActionTypes.LoginFail,
//   props<{ payload: any }>()
// );
