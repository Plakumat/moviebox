import axios, { AxiosResponse } from 'axios';
import { BASE_URL, AUTH_TOKEN } from '../constants';

/**
 *
 */
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: 'Bearer ' + AUTH_TOKEN,
  },
});

/**
 *
 * @param response
 * @returns
 */
const responseBody = (response: AxiosResponse) => response.data;

/**
 *
 */
export const request = {
  get: (url: string) => axiosInstance.get(url).then(responseBody),
  post: (url: string, body: {}) =>
    axiosInstance.post(url, body).then(responseBody),
  put: (url: string, body: {}) =>
    axiosInstance.put(url, body).then(responseBody),
  delete: (url: string) => axiosInstance.delete(url).then(responseBody),
};
