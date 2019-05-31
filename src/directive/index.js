import Vue from 'vue'
import Store from '../store/index'

// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  bind: function(el, binding, vnode) {
    Store.dispatch('PushFocusItem', { el: $(el).children(0), binding })
    $(el).off('keyup').on('keyup', {el, binding}, e => {
      if (e.keyCode === 13) {
        if (binding.value.callback) {
          binding.value.callback()
        }
        if (binding.value.type === 'checkbox') {
          let index = Store.getters.childrenIndex
          let length = $(el).children().length
          if (index++ < length - 1) {
            Store.dispatch('SetChildrenIndex', index)
            Store.dispatch('SetCurrentIndex', binding.value.index - 1)
            return
          }
          Store.dispatch('SetChildrenIndex', 0)
          Store.dispatch('SetCurrentIndex', binding.value.index)
        } else {
          Store.dispatch('SetCurrentIndex', binding.value.index)
        }
        // else if (binding.value.type === 'radio') {
        //   Store.dispatch('SetCurrentIndex', binding.value.index)
        // } 
        e.stopPropagation()
      }
    })
  },
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el, binding, vnode) {
    console.log(Store.state.focus.focusList)
  },
  // 当指令所在组件的 VNode 及其子 VNode 全部更新后调用
  //这是每当绑定的值发生改变时触发的钩子函数
  componentUpdated: function (el, binding, vnode) {
    // console.log(el, binding, vnode)
  },
  unbind(el, binding) {
    console.log('unbinding')
    Store.dispatch('ClearFocusList')
  }
})
