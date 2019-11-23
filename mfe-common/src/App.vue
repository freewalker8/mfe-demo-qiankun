<template>
  <div id="app">
    <div id="wst-common-top">
      <div id="wst-common-top__logo"><h1>卫士通通用管理平台</h1></div>
      <div id="wst-common-top__nav">
        <router-link to="/mfe_log">日志管理</router-link> |
        <router-link to="/mfe_admin">系统管理</router-link>
      </div>
      <ul id="wst-common-top__quickmenu">
        <li class="pointer"><i class=""></i><span>退出登录</span></li>
      </ul>
    </div>
    <div id="wst-common-down">
      <div id="wst-common-sidenav">
        <ul>
          <li><router-link to="/mfe-log"><i class=""></i>日志管理</router-link></li>
          <li><router-link to="/mfe-admin"><i class=""></i>系统管理</router-link></li>
        </ul>
      </div>
      <div id="wst-common-container">
        <router-view/>
        <div id="single-spa-application:mfe_log"></div>
        <div id="single-spa-application:mfe_admin"></div>
        <div id="single-spa-application:mfe_react"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Common',
  data() {
    return {}
  },
  beforeMount() {

  },
  mounted() {
  },
  methods: {

  }
}
</script>


<style lang="less" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  display: flex;
  flex-direction: column;
}
#wst-common-top{
  display: flex;
  flex: none;
  justify-content: space-between;
  height: 66px;
  line-height: 66px;
  font-size: 16px;
  color: #fff;
  background-color: #2c3e50;
  #wst-common-top__logo{
    width: 330px;
    flex:none;
    h1{
      margin: 0;
      height: 100%;
      line-height: 66px;
      padding: 0 20px;
    }
  }
  #wst-common-top__nav {
    padding: 0 30px;
    text-align: left;
    flex: auto;
    a {
      color: #ffffff;
      padding: 0 10px;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  #wst-common-top__quickmenu{
    padding: 0 20px 0 0;
    margin: 0;
    flex: none;
  }
}

#wst-common-down{
  display: flex;
  flex: auto;
  #wst-common-sidenav{
    flex: none;
    width: 200px;
    background-color: #2c3e50;
    border-top: 1px solid #01162b;
    color:#ffffff;
    ul{
      margin: 0;
      padding: 6px 0;
      li{
        width: 100%;
        padding: 8px 20px;
        text-align: left;
        a {
          color: #ffffff;
          width: 100%;
          display: inline-block;
        }
      }
      li:hover{
        cursor: pointer;
        background-color: #52687d;
      }
      li.current{
        background-color: #52687d;
      }
    }
  }
  #wst-common-container{
    flex: auto;
    padding: 10px 20px;
  }
}


.pointer{
  cursor: pointer;
}
</style>
