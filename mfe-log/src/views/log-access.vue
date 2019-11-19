<template>
  <el-table
    :data="accessLogs"
    height="450"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="operator"
      label="操作者"
      width="180">
    </el-table-column>
    <el-table-column
      prop="detail"
      label="操作事件">
    </el-table-column>
  </el-table>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'LogAccess',
  data() {
    return {      
    }
  }, 
  computed: {
    ...mapGetters(['accessLogs'])
  },
  mounted() {    
    const self = this;
    bus.$off('addAccessLog'); // 先注销监听，避免多次监听
    bus.$on('addAccessLog', (p) => {
      p && self.addLog(p);
    })
  },
  destroyed() {
    
  },
  methods: {
    addLog(p) {
      this.$store.commit('addAccessLog', {
        operator: p.operator,
        detail: p.detail,
        date: new Date().getTime()
      });
    }
  }
}
</script>
