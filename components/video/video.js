// components/video.js
import route from '../../utils/route'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    videoData: {
      type:Object,
      value: null
    },
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
  observers: {
    videoData(obj) {
      console.log('obj:', obj)
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
