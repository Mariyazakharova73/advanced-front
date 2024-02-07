import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8000'
    : 'https://advanced-front-2etzkkd5a-mariyazakharova73s-projects.vercel.app';

export const $api = axios.create({
  baseURL: baseURL,
});

$api.interceptors.request.use(config => {
  if (config.headers) {
    config.headers.Authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
  }
  return config;
});
