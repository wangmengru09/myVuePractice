<template>
  <div
    v-show="true"
    id="printHtml">
    <div>
      <object
        id="LODOP_OB"
        classid="clsid:2105C259-1E0C-4534-8141-A753534CB4CA"
        width="800px"
        height="400px">
        <embed
          id="LODOP_EM"
          type="pplication/x-print-lodop"
          width="820px"
          height="450px"
          pluginspage="install_lodop32.exe">
      </object>
    </div>
    <textarea
      id="textarea"
      rows="10"
      cols="98" />
      <!-- <iframe id="previewHtml" style="width:800px;height:600px;"></iframe> -->
  </div>
</template>

<script>
import { getLodop } from '../../utils/LodopFuncs.js'

export default {
  data() {
    return {
      LODOP: '',
      list: [
        {
          key: 'name',
          value: '张三'
        },
        {
          key: 'address',
          value: '张三张三张三'
        }
      ]
    }
  },
  created() {
    // document.getElementById('textarea').value = ''
    // this.LODOP = getLodop(document.getElementById('LODOP_OB'), document.getElementById('LODOP_EM'))
    // this.LODOP.PRINT_INIT('PIM-打印控件')
    // this.LODOP.SET_SHOW_MODE('DESIGN_IN_BROWSE', 1)
    // this.LODOP.PRINT_DESIGN()
  },
  methods: {
    // 打印设计，可自定义打印模板
    printDesign() {
      document.getElementById('textarea').value = ''
      this.LODOP = getLodop(document.getElementById('LODOP_OB'), document.getElementById('LODOP_EM'))
      this.LODOP.PRINT_INIT('PIM-打印控件')
      this.LODOP.SET_SHOW_MODE('DESIGN_IN_BROWSE', true)
      // this.LODOP.ADD_PRINT_IMAGE(10,10,300,160, '<img src="C:\Users\wmr\Pictures\Camera Roll\pinkGirl.jpg" />')
      this.LODOP.PRINT_DESIGN('previewHtml')
    },
    // 通过GET_VALUE，获取base64格式的自定义打印模板的内容
    getProgramData() {
      this.LODOP = getLodop(document.getElementById('LODOP_OB'), document.getElementById('LODOP_EM'))
      return new Promise((resolve) => {
        if (this.LODOP.CVERSION) {
          this.LODOP.On_Return = function (TaskID, Value) {
            document.getElementById('textarea').value = Value
            resolve()
          }
        }
        // 获得文档式模板
        this.LODOP.GET_VALUE('ProgramData', 0)
      })
    },
    // 打印预览，将base64格式的模板添加到预览界面中，通过SET_PRINT_STYLEA可以给对应的字段赋值
    preview() {
      this.LODOP = getLodop()
      this.LODOP.ADD_PRINT_DATA('ProgramData', document.getElementById('textarea').value)
      this.list.forEach(item => {
        this.LODOP.SET_PRINT_STYLEA(item.key, 'CONTENT', item.value)
      })
      this.LODOP.SET_SHOW_MODE('HIDE_PBUTTIN_PREVIEW', 1)
      this.LODOP.PREVIEW('previewHtml')
      // this.LODOP.PREVIEW()
    }
  }
}
</script>

<style>
</style>
