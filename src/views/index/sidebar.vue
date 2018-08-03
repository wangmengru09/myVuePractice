<template>
    <el-menu default-active="1-1" 
      class="el-menu-vertical-demo" 
      :collapse="isCollapse" 
      :router="true"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="">
        <i class="el-icon-menu" @click="handleOpen"></i>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/tables">表格</el-menu-item>
          <el-menu-item index="/">列表</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
</template>

<script>
export default {
  // props: ['isCollapse'],
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      // this.isCollapse = false;
      if (this.isCollapse) {
        this.isCollapse = false;
      } else {
        this.isCollapse = true;
      }
    },
    handleClose(key, keyPath) {
      this.isCollapse = true;
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  height: 100%;
}
.el-menu-item-group__title {
  padding: 0;
}
</style>
