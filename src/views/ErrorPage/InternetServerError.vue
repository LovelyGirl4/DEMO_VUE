<!--500页面-->
<template>
  <div class="wrapper">
    <h2>500</h2>
    <h1>INTERNET SERVER ERROR</h1>
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
      // const role = localStorage.getItem('roleType');
      // if (role === 'ADMIN') {
      //   this.$router.push({ path: '/configure' });
      // } else if (role === 'WORKER') {
      //   this.$router.push({ path: '/worksheet' });
      // } else {
      //   this.$router.push({ path: '/home' });
      // }
      this.$router.push({ path: '/' });
    },
  },
};
</script>

<style scoped lang="stylus">
  .wrapper{
    width: 100%;
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
