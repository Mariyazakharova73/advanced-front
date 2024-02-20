import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { baseURL } from './api';

export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    prepareHeaders: headers => {
      const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
      if (token) {
        headers.set('Authorization', token);
      }
      return headers;
    },
  }),
  endpoints: builder => ({}),
});
