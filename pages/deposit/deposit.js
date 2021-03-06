// pages/deposit/deposit.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    money: 19,
    inputText: '',
    userinfo: {}
  },

  carry: function () {
    this.setData({
      inputText: this.data.money
    })
  },

  toast: function () {
    wx.showToast({
      title: '提现申请发起成功，钱款会实时到账，请注意在您的微信零钱内查收！',
      icon: 'none',
      duration: 2000
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    /**
 * 获取用户信息
 */
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,

      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,

        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,

          })
        }
      })
    }

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
    this.money
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

  }

})