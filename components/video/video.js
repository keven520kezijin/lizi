// components/video.js
import route from '../../utils/route'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isEdit: {
      type: Boolean,
      value: false
    },
    price: {
      type: Number,
      value: -1
    },
    title: {
      type: String,
      value: ''
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
    toAuth() {
      route.navigateTo('/pages/principalSheet/principalSheet', 'authId=8')
    }
  }
})
