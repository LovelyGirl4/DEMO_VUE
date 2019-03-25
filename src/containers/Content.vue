<template>
  <div class="content-wrapper">
    <div class="content-bread">
      <span v-for="(item,index) in myBread" :key="item.path">
        <span>
          <router-link v-if="index!==myBread.length-1" :to="{path: item.path}">
            {{item.name}}
          </router-link>
          <span :style="{cursor: 'default'}" v-else>{{item.name}}</span>
        </span>
        <span class="content-split" v-if="index!==myBread.length-1">></span>
      </span>
    </div>
    <div class="content-in">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Content',
  data() {
    return {};
  },
  computed: {
    myBread() {
      return this.$route.matched;
    },
  },
  mounted() {
  },
  methods: {},
  components: {},
};
</script>

<style scoped lang="stylus">
.content-wrapper {
  background: #f2f5fa;
  display: flex;
  flex: 1;
  flex-direction: column;

  .content-bread {
    width: auto;
    height: 42px;
    padding: 20px 10px 8px 20px;
    font-size: 14px;
    line-height: 14px;

    .content-split {
      cursor: default;
      padding-left: 5px;
      padding-right: 5px;
    }
  }

  .content-in {
    min-width: 1044px;
    overflow: auto;
    padding: 0 20px 20px;
    flex-grow:2;
  }
}
</style>
