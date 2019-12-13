<template>
  <div id="app">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane name="logAccess">
        <span slot="label">          
         <i class="el-icon-tickets"></i> 访问日志
        </span>
      </el-tab-pane>
      <el-tab-pane name="logLogin">
        <span slot="label">          
          <i class="el-icon-tickets"></i> 登录日志
        </span>
      </el-tab-pane>
    </el-tabs>   
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'MfeLog',
  data() {
    return {
      activeName: 'logAccess',
      nameMap: {
        '/log-access': 'logAccess',
        '/log-login': 'logLogin',
      },
      subscription: null
    }
  },
  mounted() {
    this.linkToPage();
    this.subscription = subjectBus.addSubscribe('log_sub', (v) => {
      console.log('log subscribe', v);
    });
  },
  destroyed() {
  },
  methods: {
    handleClick({name}) {
      this.$router.push({name});
    },
    linkToPage() {
      const fullPath = this.$router.currentRoute.fullPath;
      if (fullPath === '/') {
        const key = '/log-access';
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
