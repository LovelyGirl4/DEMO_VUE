import axios from 'axios';
import { toLogin, toInternetError } from './commonFunc';
import config from './config';

const instance = axios.create({});
// http request 拦截器
instance.interceptors.request.use(
  (conf) => {
    if (localStorage.token) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      // eslint-disable-next-line no-param-reassign
      conf.headers.token = localStorage.token;
      // config.headers.Authorization = `Bearer ${localStorage.token}`;
    }
    return conf;
  },
  err => Promise.reject(err),
);

// http response 拦截器
instance.interceptors.response.use(
  (response) => {
    if (response.data) {
      if (response.data.error === '401' && window.location.href !== `${config.redirectHost}401`) {
        window.location.href = `${config.redirectHost}401`;
      }
    }
    return response;
  },
  (error) => {
    if (error.response) {
      console.log(error.response);
      if (error.response.data.error.code === 'UNLOGIN_ERROR') {
        toLogin();
      } else {
        toInternetError();
      }
    }
    // 返回接口返回的错误信息
    return Promise.reject(error);
  },
);

export default instance;
