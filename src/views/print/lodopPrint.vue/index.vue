<template>
  <div>
    <el-button type="primary" @click="design()">打印设计</el-button>
    <el-button type="primary" @click="print1()">打印预览1</el-button>
    <el-button type="primary" @click="print2()">打印预览2</el-button>
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
    print1() {
      this.$refs['printComponent'].getProgramData().then(() => {
        this.$refs['printComponent'].preview()
      })
    },
    print2() {
      this.$refs['printComponent'].getProgramData().then(() => {
        this.$refs['printComponent'].preview()
      })
    }
  }
}
</script>

<style>

</style>
