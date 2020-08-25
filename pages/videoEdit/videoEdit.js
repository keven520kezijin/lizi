// pages/videoEdit/videoEdit.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isPay: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },

    onChange({
        detail
    }) {
        // 需要手动对 checked 状态进行更新
        this.setData({
            isPay: detail
        });
    },

    chooseImg() {
        let _this = this
        wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success(res) {
            // tempFilePath可以作为img标签的src属性显示图片
            const tempFilePaths = res.tempFilePaths
            console.log('tempFilePaths: ', tempFilePaths)
            wx.uploadFile({
            url: `${API.intf.iothost}/api/fastDFS/upload`, //仅为示例，非真实的接口地址
            filePath: tempFilePaths[0],
            name: 'file',
            header: {
                "Content-Type": "multipart/form-data", //记得设置
                token: wx.getStorageSync(DBSK.sk_token)
            },
            success(res) {
                console.log('chooseImg-res: ', res)
                if (!res.data.retcode) {
                console.log('chooseImg-res.data: ', JSON.parse(res.data).data)
                
                const obj = _this.data.settings
                obj.avatar = JSON.parse(res.data).data
                _this.updateMyProfiles(obj)
                }
            }
            })
        }
        })
    }
})