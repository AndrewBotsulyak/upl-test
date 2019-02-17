
export enum UIActionTypes {
  LoginOpen = '[UI] Login Open',
  RegisterOpen = '[UI] Register Open',
}


export class LoginOpen {
  readonly type = UIActionTypes.LoginOpen;
  constructor(public payload: boolean) { }
}

export class RegisterOpen {
  readonly type = UIActionTypes.RegisterOpen;
  constructor(public payload: boolean) { }
}


export type UIAction =
  | LoginOpen
  | RegisterOpen
;


export enum ModalActionTypes {
  LoginOpen = '[UI] Login Open',
  RegisterOpen = '[UI] Register Open',
}


