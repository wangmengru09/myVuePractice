<template>
  <div>
    <el-button type="primary" @click="design()">打印设计</el-button>
    <el-button type="primary" @click="print()">打印预览</el-button>
    <PrintComponent
      ref="printComponent" />
  </div>
</template>

<script>
import PrintComponent from '../../../components/PrintComponent/index.vue'

export default {
  components: {
    PrintComponent
  },
  data() {
    return {

    }
  },
  methods: {
    design() {
      this.$refs['printComponent'].printDesign()
    },
    print() {
      this.$refs['printComponent'].getProgramData().then(() => {
        this.$refs['printComponent'].preview()
      })
    }
  }
}
</script>

<style>

</style>
