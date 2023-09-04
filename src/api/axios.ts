import axios from 'axios';
import {APP_BASE_URL} from '@env';

const instance = axios.create({
  baseURL: APP_BASE_URL,
});

export default instance;
