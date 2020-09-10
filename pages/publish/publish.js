// pages/publish/publish.js
const util = require('../../utils/util.js');
const api = require('../../config/api.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '如果您是企业，希望制作和上传宣传视频； \n 如果您是行业专家，希望制作和上传专业视频； \n 如果您有意拓展业务，希望加入我们的区域代理团队, \n 您可以与我们联系：15021505548。'
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
  callTel() {
    wx.makePhoneCall({
      phoneNumber: '15021505548'
    })
  },
  uploadFileData() {
    wx.chooseVideo({
      count: 10,
      type: 'image',
      success (res) {
        console.log('res: ', res)
        wx.uploadFile({
          url: api.videoUpload,
          filePath: res.tempFilePath,
          name: 'filename',
          success(res) {
            console.log('ok')
            console.log('suc-res: ', res)
          }
        })
      }
    })
  }
})