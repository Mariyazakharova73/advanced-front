export interface Profile {
  id?: string;
  first?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: Profile;
  // form?: Profile;
  error?: string;
  isLoading: boolean;
  readonly: boolean; // редактирование профиля
  // validateErrors?: validateProfileError[];
}

export enum Currency {
  RUB = 'RUB',
  EUR = 'EUR',
  USD = 'USD',
}

export enum Country {
  Russia = 'Russia',
  Belarus = 'Belarus',
  Armenia = 'Armenia',
}
