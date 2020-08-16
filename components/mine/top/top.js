// components/mine/top/top.js
import route from '../../../utils/route'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    xqBtn: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toPrincipalDetail() {
      route.navigateTo('/pages/principalDetails/principalDetails', 'authId=8')
    }
  }
})
