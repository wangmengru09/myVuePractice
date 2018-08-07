<template>
  <div class="index_tabs">
    <el-tag
      v-for="tag in tags"
      :key="tag.name"
      closable
      @close="closeTabs(tag)"
      :type="tag.type">
      {{tag.name}}
    </el-tag>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        { name: "标签一", type: "" },
        { name: "标签二", type: "success" },
        { name: "标签三", type: "info" },
        { name: "标签四", type: "warning" },
        { name: "标签五", type: "danger" }
      ]
    };
  },
  methods: {
    closeTabs(tag) {
      console.log(tag);
      this.tags.splice(this.tags.indexOf(tag), 1);
    }
  }
};
</script>

<style>
.index_tabs {
  width: 100%;
  height: 50px;
  text-align: left;
  padding: 0 10px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #545c64;
}
.index_tabs > span {
  margin-right: 10px;
  margin-top: 18px;
  cursor: default;
}
.el-tag {
  background-color: #eee;
}
</style>
