import axios from 'axios';
import {API_BASE_URL as baseURL} from '@env';

export const services = axios.create({
  baseURL,
});
