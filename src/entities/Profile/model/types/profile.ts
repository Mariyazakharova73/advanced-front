import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export enum FormFields {
  FIRST = 'first',
  LASTNAME = 'lastname',
  AGE = 'age',
  CURRENCY = 'currency',
  COUNTRY = 'country',
  CITY = 'city',
  USERNAME = 'username',
  AVATAR = 'avatar',
}

// export interface Profile {
//   id?: string;
//   first?: string;
//   lastname?: string;
//   age?: number;
//   currency?: Currency;
//   country?: Country;
//   city?: string;
//   username?: string;
//   avatar?: string;
// }

export interface Profile {
  id?: string;
  [FormFields.FIRST]?: string;
  [FormFields.LASTNAME]?: string;
  [FormFields.AGE]?: number;
  [FormFields.CURRENCY]?: Currency;
  [FormFields.COUNTRY]?: Country;
  [FormFields.CITY]?: string;
  [FormFields.USERNAME]?: string;
  [FormFields.AVATAR]?: string;
}

export const formFields = [
  FormFields.FIRST,
  FormFields.LASTNAME,
  FormFields.AGE,
  FormFields.CITY,
  FormFields.USERNAME,
  FormFields.AVATAR,
];