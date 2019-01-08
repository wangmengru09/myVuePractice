<template>
  <div class="demo">
    <el-button type="primary" @click="print()">打印设计</el-button>
    <input type="text" id="data01" size="30" value="泰安市青年路28号银泰大厦">
    <!-- <object  id="LODOP_OB" classid="clsid:2105C259-1E0C-4534-8141-A753534CB4CA" width=0 height=0> 
       <embed id="LODOP_EM" type="application/x-print-lodop" width=0 height=0></embed>
    </object>-->
    <div id="printTable1">
      <div style="text-align: left;margin-bottom:5px;">2018/12/18</div>
      <h3>宝山区淞南镇社区卫生服务中心</h3>
      <h4>医嘱单</h4>
      <table style="text-align:left;" class="patientInfo">
        <tbody>
          <tr>
            <td width="32%">姓名：张明生</td>
            <td width="16%">性别：男</td>
            <td width="16%">年龄：58</td>
            <td width="36%">卡号：123456789123456</td>
          </tr>
          <tr>
            <td colspan="1">联系方式：12345678912</td>
            <td colspan="3">居住地址：上海市静安区广中西路777号 多媒体大厦 18楼</td>
          </tr>
          <tr>
            <td colspan="4">
              <span style="display:inline-block;width:11%;">过敏史：</span>
              <span style="display:inline-block;width:88%;">测试数据测试数据测试数据</span>
            </td>
          </tr>
          <tr>
            <td colspan="4">
              <span style="display:inline-block;width:13%;">临床诊断：</span>
              <span style="display:inline-block;width:86%;">诊断信息诊断信息诊断信息诊断信息诊断信息诊断信息</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div style="text-align:left;padding-top: 10px;font-size:16px;">Rp</div>
      <div style="min-height:193px;height:auto;">
        <!-- 药品 -->
        <table class="medicineInfo">
          <thead>
            <tr>
              <th width="35%">药品名</th>
              <th width="35%">规格型号</th>
              <th width="15%">用法</th>
              <th width="15%">总量</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item,index in tableData"
              :key="index">
              <td width="35%">{{ item.name }}</td>
              <td width="35%">{{ item.spec }}</td>
              <td width="15%" style="text-align:center;">{{ item.freq }}</td>
              <td width="15%" style="text-align:center;">{{ item.quality }}</td>
            </tr>
            <tr>
              <td width="35%">金匮肾气片金匮肾气片0.27g*100片/瓶,塑料瓶</td>
              <td width="35%">0.27g*100片/瓶,塑料瓶</td>
              <td width="15%" style="text-align:center;">每日两次</td>
              <td width="15%" style="text-align:center;">1瓶</td>
            </tr>
          </tbody>
        </table>
        <!-- 诊疗 -->
        <table v-show="showMedician" class="medicineInfo">
          <thead>
            <tr>
              <th width="50">诊疗名称</th>
              <th width="20%">数量</th>
              <th width="30%">价格</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item,index in tableData"
              :key="index">
              <td width="50">{{ item.name }}</td>
              <td width="20%" style="text-align:center;">{{item.quality  }}</td>
              <td width="30%" style="text-align:center;">{{ item.freq }}</td>
            </tr>
          </tbody>
        </table>
        <!-- 检验 -->
        <table v-show="showMedician" class="medicineInfo" id="">
          <thead>
            <tr>
              <th width="20%">项目名称</th>
              <th width="40%">部位</th>
              <th width="40%">备注</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item,index in tableData"
              :key="index">
              <td width="20">{{ item.name }}</td>
              <td width="40%" style="text-align:center;">{{item.quality  }}</td>
              <td width="40%" style="text-align:center;">{{ item.freq }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>以下空白，本处方当日有效！</p>
      <div class="doctor" style="page-break-after:always;">
        <span>开单医生：</span>
        <span>张医生</span>
        <span style="margin-left:10px;">开单日期：</span>
        <span>2018-12-19</span>
      </div>
    </div>
  </div>
</template>
<script>

import { getLodop } from '../../utils/LodopFuncs.js'

export default {
  name: "demo",
  data() {
    return {
      showMedician: false,
      tableData: [
        {
          name: '上颌结节修整术(口腔科小手术)',
          spec: '金匮肾气片金匮肾气片0.27g*100片/瓶,塑料瓶',
          freq: '每日两次',
          quality: '1次',
        },
        {
          name: '上颌结节修整术(口腔科小手术)',
          spec: '金匮肾气片金匮肾气片0.27g*100片/瓶,塑料瓶',
          freq: '每日两次',
          quality: '1次',
        },
        {
          name: '上颌结节修整术(口腔科小手术)',
          spec: '金匮肾气片金匮肾气片0.27g*100片/瓶,塑料瓶',
          freq: '每日两次',
          quality: '1次',
        }
      ]
    }
  },
  created() {
    // LODOP.ADD_PRINT_DATA()
  },
  methods: {
    // 查询数据
    printPdf() {
      var MyData = document.getElementById('data01').value;
      let str = "关闭本设计窗口会看到程序代码";
      LODOP.PRINT_INIT("TEST");
      // LODOP.SET_PRINT_MODE("PROGRAM_CONTENT_BYVAR", false); // 打印内容允许变量传递
      LODOP.ADD_PRINT_TEXTA("htm-1", 10, 174, 317, 30, str); // 插入文本，参数1：文本类名
      LODOP.SET_PRINT_STYLEA('htm-1', "FontSize", 15); // 设置打印样式
      // LODOP.ADD_PRINT_ELLIPSE(95, 34, 100, 60, 0, 1); // 插入椭圆
      LODOP.ADD_PRINT_BARCODE(226, 470, 213, 60, "128A", "123456789012"); //插入二维码
      LODOP.SET_PRINT_STYLEA(0, "Color", "#FF00FF");
      LODOP.ADD_PRINT_CHART(324, 66, 604, 185, 1, "柱状图的table超文本"); // 插入图表，参数5：图表类型
      LODOP.ADD_PRINT_SHAPE(4, 62, 167, 239, 128, 0, 1, "#0080FF"); // 增加图形，参数1：图形类型；参数5：线条类型；参数6：线条宽度
      // 增加超文本打印项，参数5：超文本内容
      LODOP.ADD_PRINT_HTM(52, 458, 261, 161, "<!DOCTYPE>\n<style>table,td{border:1px solid black;}</style>\n<body style=\"background-color:transparent;margin:0\" >\n<table>\n<tr>\n<td>透明超文本表格</td>\n<td>预览就看出透明</td>\n<td>预览才看出透明</td>\n</tr>\n<tr>\n<td>非表格也能透明</td>\n<td>预览看出透明</td>\n<td>预览看出透明</td>\n</tr>\n</table>");
      LODOP.ADD_PRINT_TEXT(249, 65, 324, 30, MyData);
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 13);
      LODOP.SET_PRINT_STYLEA(0, "FontColor", "#FF0000");
      // LODOP.SET_PRINT_STYLEA(0, "ContentVName", "MyData");
      LODOP.PRINT_DESIGN();
    },
    print() {
      LODOP.PRINT_INIT("TEST");
      LODOP.ADD_PRINT_TEXTA("title", 57, 257, 202, 25, "宝山区淞南镇社区卫生服务中心");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
      LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
      LODOP.SET_PRINT_STYLEA(0, "Horient", 2);
      LODOP.ADD_PRINT_TEXTA("orderTitle", 94, 319, 64, 25, "药物医嘱");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
      LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
      LODOP.SET_PRINT_STYLEA(0, "Horient", 2);
      LODOP.ADD_PRINT_TEXTA("printDate", 30, 40, 110, 24, "2018年12月18日");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
      LODOP.ADD_PRINT_TEXT(140, 40, 50, 25, "姓名：");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
      LODOP.SET_PRINT_STYLEA(0, "Alignment", 3);
      LODOP.ADD_PRINT_TEXTA("patientName", 140, 90, 65, 25, "吴才明");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
      LODOP.ADD_PRINT_TEXT(140, 200, 48, 25, "性别：");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
      LODOP.SET_PRINT_STYLEA(0, "Alignment", 3);
      LODOP.ADD_PRINT_TEXTA("patientGender", 140, 250, 40, 25, "未知");
      LODOP.ADD_PRINT_TEXT(140, 362, 48, 25, "年龄：");
      LODOP.SET_PRINT_STYLEA(0, "Alignment", 3);
      LODOP.ADD_PRINT_TEXTA("patientAge", 140, 410, 40, 25, "99");
      LODOP.ADD_PRINT_TEXT(140, 515, 70, 25, "就诊卡号：");
      LODOP.SET_PRINT_STYLEA(0, "Alignment", 3);
      LODOP.ADD_PRINT_TEXTA("pBedNo", 140, 585, 120, 25, "123464565645645655");
      LODOP.ADD_PRINT_TEXT(170, 40, 75, 25, "联系方式：");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
      LODOP.SET_PRINT_STYLEA(0, "Alignment", 3);
      LODOP.ADD_PRINT_TEXTA("telephone", 170, 115, 100, 25, "13912341234");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
      LODOP.ADD_PRINT_TEXT(170, 230, 75, 25, "居住地址：");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
      LODOP.SET_PRINT_STYLEA(0, "Alignment", 3);
      LODOP.ADD_PRINT_TEXTA("address", 170, 305, 401, 25, "上海市静安区广中西路777号 多媒体大厦 18楼");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
      LODOP.ADD_PRINT_TEXT(200, 40, 63, 25, "过敏史：");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
      LODOP.SET_PRINT_STYLEA(0, "Alignment", 3);
      LODOP.ADD_PRINT_TEXTA("allergicHistory", 200, 100, 605, 25, "上海市静安区海市静大厦 18楼");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
      LODOP.ADD_PRINT_TEXT(230, 40, 75, 25, "临床诊断：");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
      LODOP.SET_PRINT_STYLEA(0, "Alignment", 3);
      LODOP.ADD_PRINT_TEXTA("diagnosis", 230, 114, 592, 25, "临床诊断");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
      LODOP.PRINT_DESIGN();
    },
    printPdf2() {
      LODOP.PRINT_INIT("处方打印");
      LODOP.SET_PRINT_PAGESIZE(1, 0, 0,"A5");
      this.createHtml();
      // LODOP.PRINT_DESIGN();
      LODOP.PREVIEW();
    },
    createHtml() {
      for(let i = 1; i <= 1; i++) {
        let strHtml = document.getElementById("printTable" + i).innerHTML;
        var strBodyStyle = "<style>body {text-align:center;font-size:14px} .patientInfo td {padding: 3px 5px;} table {border-collapse: collapse;border: 0; width: 100%; font-size: 12px;} .medicineInfo th, .medicineInfo td {border: 0;padding: 7px 10px;} .medicineInfo th {border-bottom: 1px solid #000;} .medicineInfo tbody tr:first-child td {padding-top: 15px;} .medicineInfo tbody tr:last-child td {} p {border-top: 1px solid #000;padding: 5px; text-align: left; font-size:14px;} .doctor {float: right;padding: 10px; font-size:14px;}</style>";
        var strFormHtml = strBodyStyle + "<body>" + strHtml + "</body>";
        LODOP.NEWPAGEA ();
        LODOP.ADD_PRINT_HTM(20, 20, "RightMargin:20", "100%", strFormHtml);
      }
    },
    fMyDesign2() {
      LODOP = getLodop();
      LODOP.PRINT_INIT("打印控件功能演示_Lodop功能_打印设计权限控制");
      LODOP.ADD_PRINT_TEXT(90, 311, 231, 35, "打印设计权限控制");
      LODOP.SET_SHOW_MODE("SETUP_ENABLESS", '11111111111111');
      LODOP.PRINT_DESIGN();
    }
  }
}
</script>
<style>
body {
  text-align:center;
  font-size:14px;
} 
.patientInfo td {
  padding: 3px 5px;
} 
table {
  border-collapse: collapse;
  border: 0; 
  width: 100%; 
  font-size: 12px;
} 
.medicineInfo tbody tr:first-child td {
  padding-top: 15px;
}
.medicineInfo tbody tr:last-child td {
  padding-bottom: 15px;
}
.medicineInfo th, 
.medicineInfo td {
  border: 0;
  padding: 7px 10px;
} 
.medicineInfo th {
  border-bottom: 1px solid #000;
} 
p {
  border-top: 1px solid #000;
  padding: 5px; 
  text-align: left; 
  font-size:14px;
} 
.doctor {
  float: right;
  padding: 10px; 
  font-size:14px;
}
</style>
