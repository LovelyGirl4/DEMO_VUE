<!--401页面-->
<template>
  <div class="wrapper">
    <img src="../../assets/img/401.png"/>
    <div style="margin: 20px 0;">未经授权，拒绝访问，请重新登录</div>
    <a-button type="primary" @click="toLogin">重新登录</a-button>
  </div>
</template>

<script>
// import { commonLogout } from '../../api/loginApi';
import config from '../../utils/config';

export default {
  name: 'Unauthorized',
  data() {
    return {};
  },
  methods: {
    toLogin() {
      localStorage.clear();
      window.location.href = `${config.authHost}/login?clientId=${config.clientId}&redirect_uri=${config.redirectHost}`;
      // commonLogout(localStorage.getItem('access_token')).then((cJson) => {
      //   if (cJson.success) {
      //     localStorage.clear();
      //     window.location.href = `${config.authHost}/login?clientId=${config.clientId}&redirect_uri=${config.redirectHost}`;
      //   } else {
      //     that.$message.error('退出登录失败');
      //   }
      // })
    },
  },
};
</script>

<style scoped lang="stylus">
  .wrapper{
    width: 100%;
    min-height: 100%;
    padding: 20px 0 80px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
