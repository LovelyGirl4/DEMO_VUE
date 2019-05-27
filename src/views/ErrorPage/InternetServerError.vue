<!--500页面-->
<template>
  <div class="wrapper">
    <img src="../../assets/img/500.png"/>
    <div style="margin: 20px 0;">连接服务器失败，请刷新页面</div>
    <a-button type="primary" @click="toHome">返回首页</a-button>
  </div>
</template>

<script>
export default {
  name: 'InternetServerError',
  data() {
    return {};
  },
  methods: {
    toHome() {
      this.$router.push({ path: '/' });
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
