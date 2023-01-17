import { AxiosResponse } from 'axios';
import api from './api';

export const getCategory = <T extends unknown[]>(): Promise<AxiosResponse<T>> =>
  api.get<T>('/channels');
