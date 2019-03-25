<template>
  <div class="header-wrapper">
    <div class="header-left">
      <BaseIcon :type="iconType" class="icon"></BaseIcon>
      <span class="tips">{{currentMenu}}</span>
    </div>
    <div class="user-info">
      <div v-if="userInfo.multiTenant">
        <span class="user-name">你好，</span>
        <a-dropdown :trigger="['click']">
          <span class="user-name">
            {{userInfo.tenantName}}&nbsp;
            <a>[切换]</a>
          </span>
          <a-menu slot="overlay">
            <a-menu-item v-for="tenant in tenants" :key="tenant.tenantId">
              <div @click="changeUserTenant(tenant.tenantId)">{{tenant.tenantName}}</div>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
      <span class="user-name" v-else>你好，{{userInfo.tenantName}}</span>

      <a-dropdown :trigger="['click']">
        <div class="user-info">
          <div class="user-avatar">
            <div class="img"/>
          </div>
          <span style="margin-left: 10px;" class="user-name">{{userInfo.userName}}</span>
          <a-icon type="caret-down" style="margin-left: 10px;color: #4BB5FF"/>
        </div>
        <a-menu slot="overlay">
          <a-menu-item>
            <div href="javascript:;">个人信息</div>
          </a-menu-item>
          <a-menu-item>
            <div href="javascript:;">设置</div>
          </a-menu-item>
          <a-menu-item>
            <div href="javascript:;" @click="handleLogout">退出登录</div>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { toLogin } from '../utils/commonFunc';

export default {
  name: 'Header',
  data() {
    return {
      tenants: [],
    };
  },
  inject: ['reload'],
  computed: {
    ...mapGetters(['userInfo']),
    iconType() {
      const path = this.$route.fullPath.split('/');
      return path[0] !== '' ? path[0] : path[1];
    },
    currentMenu() {
      return this.$route.name;
    },
  },
  watch: {
  },
  mounted() {
    this.getTenants();
  },
  methods: {
    ...mapMutations(['SET_USER_INFO']),
    handleLogout() {
      toLogin();
    },
  },
  components: {
  },
};
</script>

<style scoped lang="stylus">
  .header-wrapper {
    width: 100%;
    height: 70px;
    background: #FFFFFF;
    box-shadow: 0 0 10px 0 rgba(0, 31, 42, 0.2);

    .header-left {
      position: relative;
      display: flex;
      padding: 0 20px;
      float: left;
      height: 100%;
      font-size: 20px;
      font-weight: bold;
      line-height: 70px;

      .icon {
        font-size: 28px;
        background: linear-gradient(to right, #47dfea, #31a3ef);
        -webkit-background-clip: text;
        color: transparent;
        cursor: pointer;
      }

      .tips {
        margin-left: 5px;
      }
    }
    .user-info {
      float: right;
      margin-right: 15px;
      z-index: 999;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      .user-name {
        font-size: 16px;
      }

      .user-avatar {
        display: flex;
        width: 49px;
        height: 48px;
        background: url('../assets/img/circle.png');
        margin-left: 20px;
        justify-content: center;
        align-items: center;

        .img {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: url('../assets/img/head-logo.png');
          background-size: cover;
        }
      }
    }
  }

  .department-select {
    width: 200px;
    color: #fff;
    >>> .ant-select-selection--single {
      color: #fff;
      background: none;
      border: none;
      .ant-select-arrow {
        color: #fff;
      }
    }
  }

</style>
