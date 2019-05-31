<template>
  <div class="boxWrap" v-focus>
    <!-- <splitpanes class="default-theme" style="height:100%">
      <span splitpanes-default="65">
        <el-table
          border
          stripe
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180"
            fixed>
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
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
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
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
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
        </el-table>
      </span>
      <span splitpanes-default="35">
        <el-table
          border
          stripe
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180"
            fixed>
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
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
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
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
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
        </el-table>
      </span>
    </splitpanes> -->
    <split-pane :min-percent='20' :default-percent='30' split="vertical">
      <template slot="paneL">
        <el-table
          border
          stripe
          :data="tableData"
          :span-method="objectSpanMethod"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180"
            fixed>
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
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
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
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
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
        </el-table>
      </template>
      <template slot="paneR">
        <el-table
          border
          stripe
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180"
            fixed>
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
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
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
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
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
        </el-table>
      </template>
    </split-pane>
  </div>
</template>

<script>
// import Splitpanes from 'splitpanes'
import splitPane from 'vue-splitpane'

export default {
  components: {
    splitPane
  },
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '1518 弄',
        rowspan: 3,
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '1517 弄',
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '1519 弄',
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '1516 弄',
        rowspan: 2,
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '1516 弄',
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '1516 弄',
        rowspan: -1,
      }]
    }
  },
  created() {
  },
  methods: {
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      console.log(row)
      if (columnIndex === 1 && row.rowspan !== -1) {
        return [row.rowspan || 0, row.rowspan ? 1 : 0]
        // return [2, 1]
      }
    }
  }
}
</script>

<style scoped>
.boxWrap {
  width: 100%;
  height: 100%;
}
.splitpanes__pane {
  padding: 20px;
}
</style>
