import axios, { AxiosError } from 'axios';

const BASE_URL = 'https://fe-project-albaform.vercel.app/10-4/';

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

instance.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ message: string }>) => {
    const res = error.response;
    if (res)
      console.log(`[${error.status}:${res.config.url}] ${res.data.message}`);

    return Promise.reject(error);
  },
);
