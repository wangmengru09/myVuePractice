<template>
  <div class="index_wrap">
    <div class="index_header">

    </div>
    <div class="index_main">
      <sidebar :isCollapse='isCollapse'></sidebar>
      <div class="index_content">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <!-- <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table> -->
      </div>  
    </div>
  </div>
</template>

<script>
import sidebar from './sidebar.vue'
export default {
  components: {
    sidebar
  },
  data() {
    return {
      isCollapse: true,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      this.isCollapse = false;
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      this.isCollapse = true;
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
.index_main {
  display: table;
  width: 100%;
  table-layout: fixed;
}
.index_main > ul {
  display: table-cell;
  padding-top: 80px;
}
.index_content {
  display: table-cell;
  padding-top: 80px;
}
.index_header {
  height: 80px;
  width: 100%;
  background-color: #1cc09f;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
}
</style>
