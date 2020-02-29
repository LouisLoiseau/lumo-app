import axios from 'axios';
const env = require('./envConfig.json');
const HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

const BASE_URL = __DEV__ === true ? env.louis.apiUrl : env.prod.apiUrl;

const apiInstance = axios.create({
  baseURL: BASE_URL,
  // timeout: 10000,
  headers: HEADERS,
  responseType: 'json',
});

apiInstance.interceptors.request.use((config) => {
  console.log('Making api request on ' + config.url);
  return config;
}, function (error) {
  return Promise.reject(error);
});

export default apiInstance;