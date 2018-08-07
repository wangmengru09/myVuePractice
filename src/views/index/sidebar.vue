<template>
    <el-menu 
      :default-active="defaultActive" 
      class="el-menu-vertical-demo" 
      :collapse="isCollapse" 
      :router="true"
      background-color="#545c64"
      text-color="#fff"
      @select="open"
      active-text-color="#ffd04b">
      <div class="collapse">
        <i class="el-icon-menu" @click="handleOpen"></i>
      </div>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/tables">表格</el-menu-item>
          <el-menu-item index="/list">列表</el-menu-item>
          <el-menu-item index="/">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      defaultActive: ''
    };
  },
  created() {
    this.defaultActive = localStorage.getItem("defaultActiveIndex");
  },
  methods: {
    handleOpen(key, keyPath) {
      if (this.isCollapse) {
        this.isCollapse = false;
        this.defaultActive = localStorage.getItem('defaultActiveIndex');
      } else {
        this.isCollapse = true;
      }
    },
    open(index, val2) {
      this.defaultActive = index;
      localStorage.setItem("defaultActiveIndex", index);
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
.el-menu {
  border-right: 0;
}
.collapse {
  padding-top: 15px;
  font-size: 18px;
  color: #fff;
}
.collapse i {
  cursor: pointer;
}
</style>
