import {ICategory, IUslugaItem} from '../models/usluga.model';

export enum UslugiActionTypes {
  ActivateCategory = '[Uslugi] Activate Category',
  ActivateUsluga = '[Uslugi] Activate Usluga',
  SetCategories = '[Uslugi] Set Categories',
  DownloadCategories = '[Uslugi] Download Categories',
  DownloadUslugiByCategoryId = '[Uslugi] Download Uslugi By Category Id',
  SetUslugi = '[Uslugi] Set Uslugi',
  OpenUslugaById = '[Uslugi] Open Usluga By Id',
}

export class ActivateCategory {
  readonly type = UslugiActionTypes.ActivateCategory;
  constructor(public payload: ICategory) {}
}

export class ActivateUsluga {
  readonly type = UslugiActionTypes.ActivateUsluga;
  constructor(public payload: IUslugaItem) {}
}

export class DownloadCategories {
  readonly type = UslugiActionTypes.DownloadCategories;
}

export class SetCategories {
  readonly type = UslugiActionTypes.SetCategories;
  constructor(public payload: any) {}
}

export class DownloadUslugiByCategoryId {
  readonly type = UslugiActionTypes.DownloadUslugiByCategoryId;
  constructor(public payload: number) {}
}

export class SetUslugi {
  readonly type = UslugiActionTypes.SetUslugi;
  constructor(public payload: ISetUslugi) {}
}

export class OpenUslugaById {
  readonly type = UslugiActionTypes.OpenUslugaById;
  constructor(public payload: number) {}
}

export type UslugiAction =
  | ActivateCategory
  | ActivateUsluga
  | SetCategories
  | DownloadCategories
  | DownloadUslugiByCategoryId
  | SetUslugi
  | OpenUslugaById
;

export interface ISetUslugi {
  categoryId: number;
  uslugi: IUslugaItem[];
}
