<template>
  <div class="index_wrap">
    <div class="index_header">

    </div>
    <div class="index_main">
      <sidebar :isCollapse='isCollapse'></sidebar>
      <div class="index_content">
        <div class="index_router">
          <router-view></router-view>
        </div>
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
    
  }
}
</script>

<style>
.index_wrap {
  height: 100%;
  width: 100%;
}
.index_main {
  display: table;
  width: 100%;
  height: 100%;
  table-layout: fixed;
}
.index_main > ul {
  display: table-cell;
  padding-top: 80px;
  /* height: 100%; */
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
