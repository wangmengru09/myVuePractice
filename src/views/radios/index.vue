<template>
  <div>
    <div>
      <el-radio-group v-model="radio7">
        <!-- <el-radio label="1" border
          v-for="(item, index) in list"
          :key="index"
          :label="item.label">
          <i><img src="../../assets/images/zhifubao.png" alt=""></i>
          {{ item.name }}
          <div class="right_wrap" v-show="radio7 === item.label">
            <span class="right_icon">√</span>
          </div>
        </el-radio> -->
        <el-radio label="现金" border>
          <i><img src="../../assets/images/cash.png" alt=""></i>
          现金支付
          <div class="right_wrap" v-show="radio7 === '现金'">
            <span class="right_icon">√</span>
          </div>
        </el-radio>
        <el-radio label="支付宝" border>
          <i><img src="../../assets/images/zhifubao.png" alt=""></i>
          支付宝支付
          <div class="right_wrap" v-show="radio7 === '支付宝'">
            <span class="right_icon">√</span>
          </div>
        </el-radio>
        <el-radio label="微信" border>
          <i><img src="../../assets/images/weixin.png" alt=""></i>
          微信支付
          <div class="right_wrap" v-show="radio7 === '微信'">
            <span class="right_icon">√</span>
          </div>
        </el-radio>
        <el-radio label="支票" border>
          <i><img src="../../assets/images/bill.png" alt=""></i>
          支票支付
          <div class="right_wrap" v-show="radio7 === '支票'">
            <span class="right_icon">√</span>
          </div>
        </el-radio>
        <el-radio label="其他" border class="other_ways">
          其他支付
          <div class="right_wrap" v-show="radio7 === '其他'">
            <span class="right_icon">√</span>
          </div>
        </el-radio>
      </el-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio7: '',
      list: [
        {
          label: '1',
          name: '支付宝'
        },
        {
          label: '2',
          name: '微信'
        },
        {
          label: '3',
          name: '现金'
        },
        {
          label: '4',
          name: '银行卡'
        },
      ]
    }
  }
}
</script>

<style scoped lang="less">
i {
    color: #fff;
    width: 25px;
    height: 25px;
    position: absolute;
    top: 50%;
    left: 9px;
    transform: translateY(-50%);
    background-color: #fff;

    img {
      width: 100%;
      height: 100%;
    }
}
.el-radio {
  .right_wrap {
    text-align: center;
    border-top: 8px solid #fff;
    border-bottom: 8px solid red;
    border-left: 6px solid #fff;
    border-right: 6px solid red;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 3;
  }
  .right_icon {
    font-size: 12px;
    font-style: italic;
    color: #fff;
    position: absolute;
    bottom: -11px;
    right: -4px;
    z-index: 4;
  }
  }
  .other_ways {
    /deep/.el-radio__input {
      display: none !important;
    }
}
</style>
