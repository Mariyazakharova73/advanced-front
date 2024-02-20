import { Profile } from 'entities/Profile';

export enum ValidateProfileError {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_CITY = 'INCORRECT_CITY',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  error?: string;
  isLoading: boolean;
  readonly: boolean; // редактирование профиля
  validateErrors?: ValidateProfileError[];
}
