<template>
  <div id="form">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name" name="focusItem-1" v-focus="{index: 1, type: 'input', disabled: false, callback}"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-select
          v-model="ruleForm.region"
          ref="select"
          prefix="cesh"
          placeholder="请选择活动区域"
          v-focus="{index: 2, type: 'select', disabled: false, callback: callback2}">
          <el-option label="区域一" value="1"></el-option>
          <el-option label="区域二" value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-input v-model="ruleForm.name" name="focusItem-1" v-focus="{index: 3, type: 'input', disabled: false, callback}"></el-input>
            <!-- <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;" v-focus="{index: 3, type: 'input', disabled: false}"></el-date-picker> -->
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;" name='focusItem-4'></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送" prop="delivery">
        <el-switch v-model="ruleForm.delivery" v-focus="{index: 4, type: 'switch', disabled: false}"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质" prop="type">
        <el-checkbox-group v-model="ruleForm.type" v-focus="{index: 5, type: 'checkbox', disabled: false}">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="ruleForm.resource" v-focus="{index: 6, type: 'radio', disabled: false}">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc">
        <el-input type="text" v-model="ruleForm.desc" name='focusItem-8' v-focus="{index: 7, type: 'input', disabled: false}"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')" name='focusItem-9'>立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
        <el-button @click="set()">test</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
    },
    mounted() {
      this.$store.dispatch('SetCurrentIndex', 0)
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      callback() {
        // console.log('eeeeeeeeeee')
      },
      callback2() {
        this.ruleForm.region = 0
        // console.log(this.$refs)
        this.$refs.select.blur()
      },
      callback3() {
        this.ruleForm.date1 = new Date
      },
      set() {
         console.log(this.$store.state.focus.focusList)
        // console.log($('.el-checkbox'))
        // $('.el-checkbox__inner').eq(0).focus()
        $('.el-radio').eq(0).focus()
      }
    }
  }
</script>
<style>
 #form {
   width: 500px;
   margin-top: 50px;
 }
</style>
