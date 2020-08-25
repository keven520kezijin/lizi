// components/videoList/videoList.js
import route from '../../utils/route'
Component({
    /**
     * 组件的属性列表
     */
    properties: {

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
        toSearch() {
            console.log('route: ', route)
            route.navigateTo('/pages/search/search')
        }
    }
})