<template>
  <el-table
    :data="tableData"
    height="450"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="用户名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</template>
<script>

export default {
  name: 'LogAccess',
  data() {
    return {
      tableData: [{
        date: '2016-05-03',
        name: 'stoneliang',
        address: '10.192.168.1'
      }]
    }
  },
  mounted() {
    
  }
}
</script>
