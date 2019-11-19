<template>
  <div class="home">
    <div class="op-button">
      <button @click="addUser()" type="button" class="btn btn-success">添加</button>
      <button @click="deleteUser()" type="button" class="btn btn-danger">删除</button>
    </div>
    <div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th class="col-sm-2">#</th>
            <th class="col-sm-3">账户</th>
            <th class="col-sm-3">邮箱</th>
            <th class="col-sm-4">最后登录</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="user.username">
            <td scope="row" class="col-sm-2">{{index + 1}}</td>
            <td class="col-sm-3">{{user.username}}</td>
            <td class="col-sm-3">{{user.email}}</td>
            <td class="col-sm-4">{{user.latestLogin}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';

export default {
  name: 'UserMgt',
  data: () => {
    return {
    }
  },
  computed: {
    ...mapGetters(['users'])
  },
  methods: {
    addUser() {
      this.$router.push('/user-add');
      bus.$emit('userMgtTabChange', 'userAdd');
    },
    deleteUser() {
      this.users.pop()
    }
  }
};
</script>

<style lang="less" scoped>
.table{
  th{
    text-align:left;
  }
  td{
    text-align: left;
  }
}
.op-button{
  text-align: left;
  button {
    float: left;
    margin-right: 20px;
  }
}
</style>
