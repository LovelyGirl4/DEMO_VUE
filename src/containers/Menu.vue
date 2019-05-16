<template>
  <!-- 左侧菜单 -->
  <div class="menu-wrapper">
    <div class="menu-header">
      <img src="../assets/img/logo.png" class="menu-icon" alt>
      <span class="menu-title">项目名称</span>
    </div>
    <div class="menu-content">
      <a-menu
        mode="inline"
        v-model="defaultSelectedKeys"
        :openKeys="openKeys"
        style="width: 281px"
        @click="handleClick"
        @openChange="openChange"
      >
        <a-menu-item>
          <router-link to="/home">
            首页
          </router-link>
        </a-menu-item>
        <!-- <template v-for="item in menuArr">

          <a-menu-item
            v-if="item.children.length === 0"
            :key="item.name"
          >
            <router-link :to="{path: item.path}">
              <BaseIcon :type="item.icon" class="icon"></BaseIcon>
              {{item.name}}
            </router-link>
          </a-menu-item>

          <a-sub-menu v-else :key="item.name">
            <div slot="title" style="font-size:20px;">
              <BaseIcon :type="item.icon" class="icon"/>
              &nbsp;{{item.name}}
            </div>
            <template v-for="ele in item.children">
              <a-menu-item :key="ele.name" v-if="ifAuth(ele.auth)">
                <router-link :to="{path: ele.path}">{{ele.name}}</router-link>
              </a-menu-item>
            </template>
          </a-sub-menu>

        </template> -->
      </a-menu>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Menu',
  data() {
    return {
      defaultSelectedKeys: ['首页'],
      menuArr: [],
      openKeys: [],
    };
  },
  watch: {
  },
  created() {
  },
  mounted() {
  },
  computed: {
  },
  methods: {
    handleClick() {
    },
    openChange(menu) {
      this.openKeys = menu;
    },
  },
  components: {
  },
};
</script>

<style lang="stylus">
.menu-wrapper {
  width: 280px;
  height: 100%;
  background-color: #242F44;
  color: #9098BA;
  font-size: 20px;

  .menu-header {
    position: relative;
    display: flex;
    width: 240px;
    height: 170px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #3A4457;
    margin: 0 20px 20px;

    .menu-icon {
      // position: absolute;
      // top: 38px;
      // left: 85px;
      width: 60px;
      height: 60px;
    }

    .menu-title {
      margin-top: 20px;
      color: #fff;
    }
  }

  .menu-content {
    width: 100%;
    height: calc(100% - 190px);
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #242F44;

    .ant-menu, .ant-menu-inline, .ant-menu-sub, .ant-menu-item {
      background-color: #242F44;
      font-size: 18px;
      a {
        color: #9098BA;
        text-decoration: none;
      }
      a:hover {
        color: #fff;
      }

      .icon {
        font-size: 18px;
      }
    }

    .ant-menu-item, .ant-menu-submenu {
      border-bottom: 1px solid #3A4457;
    }

    .ant-menu-item, .ant-menu-submenu-title {
      color: #9098BA;
      margin: 0;
      height: 60px;
      line-height: 60px;
    }

    .ant-menu-inline .ant-menu-item:not(:last-child) {
      margin: 0;
    }

    .ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
      height: 60px;
      line-height: 60px;
    }

    .ant-menu-sub.ant-menu-inline > .ant-menu-item {
      margin: 0;
      height: 46px;
      line-height: 46px;
      border-top: 1px solid #3A4457;
      border-bottom: none;
      font-size: 16px;
    }

    .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
      background-color: #2A364E;
    }

    .ant-menu-submenu-title:hover,
    .ant-menu-submenu-selected .ant-menu-submenu-title,
    .ant-menu-item-selected > a,
    .ant-menu-item-selected > a:hover {
      color: #fff;
    }

    .ant-menu-submenu-title:hover .ant-menu-submenu-arrow,
    .ant-menu-submenu-selected .ant-menu-submenu-title .ant-menu-submenu-arrow {
      &::before,
      &::after {
        background: #fff;
      }
    }
  }
}
</style>
