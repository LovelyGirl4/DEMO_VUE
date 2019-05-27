<template>
  <div id="app" v-if="showFlag && !showErrorPage">
    <Menu />
    <div class="right-wrap">
      <Header/>
      <Content/>
    </div>
  </div>
  <div id="app" v-else-if="showErrorPage">
    <router-view></router-view>
  </div>
</template>
<script>
import Menu from './containers/Menu.vue';
import Header from './containers/Header.vue';
import Content from './containers/Content.vue';
import { toLogin } from './utils/commonFunc';

export default {
  name: 'App',
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      showFlag: true,
    };
  },
  watch: {
    $route() {},
  },
  created() {
    const token = localStorage.getItem('access_token');
    if (this.$route.name === 'InternetServerError' || this.$route.name === 'NotFound') {
      this.showFlag = true;
    } else if (!token) {
      toLogin();
    } else {
      // 调接口获取用户信息
    }
  },
  computed: {
    showErrorPage() {
      const route = this.$route.name;
      return route === 'NotFound' || route === 'InternetServerError' || route === 'Unauthorized';
    },
  },
  methods: {
    reload() {
      this.showFlag = false;
      const vm = this;
      this.$nextTick(() => { vm.showFlag = true; });
    },
  },
  components: {
    Menu,
    Header,
    Content,
  },
};
</script>
<style lang="stylus">
* {
  margin: 0;
  padding: 0;
}

html, body {
  width: 100%;
  height: 100%;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  vertical-align: top;
  border: none;
}

.clearf:after, .clearf:before {
  content: '';
  display: block;
  clear: both;
}

#app {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  .right-wrap {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
  }
}
</style>
