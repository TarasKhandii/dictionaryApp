import axios from 'axios';
import {APP_BASE_URL} from 'react-native-dotenv';

const instance = axios.create({
  baseURL: APP_BASE_URL,
});

export default instance;
