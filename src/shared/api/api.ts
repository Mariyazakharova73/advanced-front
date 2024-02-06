import axios from 'axios';
import { isDev } from 'shared/const/common';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

const baseURL = isDev
  ? 'http://localhost:8000'
  : 'https://advanced-front-mc2ry5klo-mariyazakharova73s-projects.vercel.app/';

export const $api = axios.create({
  baseURL: baseURL,
  headers: {
    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
  },
});
