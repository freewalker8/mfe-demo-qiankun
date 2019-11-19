<template>
  <div class="about">
    <form class="form-horizontal">
      <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">账户</label>
        <div class="col-sm-10">
          <input type="text" v-model='username' 
            class="form-control" id="inputEmail3" placeholder="账户">
        </div>
      </div>
      <div class="form-group">
        <label for="inputPassword3" class="col-sm-2 control-label">邮箱</label>
        <div class="col-sm-10">
          <input type="email" v-model='email' 
            class="form-control" id="inputPassword3" placeholder="邮箱">
        </div>
      </div>      
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button @click="addUser" class="btn btn-info">添加</button>
          <button @click="backToMgt" class="btn btn-default ml20">返回</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { Message } from 'element-ui';

export default {
  name: 'UserAdd',
  data: () => {
    return {
      username: '',
      email: '',
    }
  },
  mounted() {
  },
  methods: {
    addUser(event) {
      event.preventDefault();

      if (!this.username || !this.email) {
        Message.warning({message: '用户名和邮箱都不能为空'});
        return;
      }

      const params = {
        username: this.username, 
        email: this.email, 
        latestLogin: new Date().getTime()
      };
      
      this.$store.commit('addUser', params);
      Message.success({message: '添加成功'});
      this.clearForm()

      bus.$emit('addAccessLog', {operator: `stone_${Math.ceil(Math.random() * 1000)}`, detail: '添加用户'});
      subjectBus.next({type: 'addAccessLog', operator: `stone_${Math.ceil(Math.random() * 1000)}`, detail: '添加用户'});
    },
    backToMgt() {
      this.$router.push({name: 'userMgt'});
      bus.$emit('userMgtTabChange', 'userMgt');
    },
    clearForm() {
      this.username = '';
      this.email = '';
    }
  }
}
</script>

<style lang="less" scoped>
.ml20{margin-left: 20px;}
</style>
