<template>
  <div id="spa-mfe-admin">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="userMgt"></el-tab-pane>
      <el-tab-pane label="增加用户" name="userAdd"></el-tab-pane>
    </el-tabs>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'MfeAdmin',
  data() {
    return {
      activeName: 'userMgt',
      nameMap: {
        '/user-mgt': 'userMgt',
        '/user-add': 'userAdd'
      },
      subscription: null
    }
  },
  mounted() {
    this.linkToPage();
    bus.$on('userMgtTabChange', (tabName) => {
      this.activeName = tabName;
    });

    this.subscription = subjectBus.addSubscribe('admin_sub', (v) => {
      console.log('admin subscribe', v);
    });
  },
  destroyed() {
    bus.$off('userMgtTabChange');
  },
  methods: {
    handleClick({name}) {
      this.$router.push({name});
    },
    linkToPage() {
      const fullPath = this.$router.currentRoute.fullPath;
      if (fullPath === '/') {
        const key = '/user-mgt';
        this.activeName = this.nameMap[key];
        this.$router.push(key);
      }
    }
  }
}
</script>


<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
