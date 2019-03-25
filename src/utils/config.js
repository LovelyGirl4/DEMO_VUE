// 开发环境
const devConfig = {
  env: 'dev',
  authHost: 'http://122.112.229.242:8090/#',
  redirectHost: 'http://localhost:8087/#/',
  clientId: '2b89893566914c1c84b08bb3562c57eb',
};

// 专网正式环境
const prodConfig = {
  env: 'prod',
  authHost: 'http://172.21.246.150:8090/#',
  redirectHost: 'http://172.21.246.176:8001/#/',
  clientId: '2b89893566914c1c84b08bb3562c57eb',
};

// 公网测试环境
const testConfig = {
  env: 'test',
  authHost: 'http://122.112.229.242:8090/#',
  redirectHost: 'http://172.21.246.177:8081/#/',
  clientId: '2b89893566914c1c84b08bb3562c57eb',
};

const config = process.env.NODE_ENV === 'development' ? devConfig : process.env.VUE_APP_TITLE === 'test' ? testConfig : prodConfig;

export default config;
