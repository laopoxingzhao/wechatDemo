// pages/hu/hu.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
      hu:"ddd",
      cities:null
  },
  tiaozhuan:function(){
    // wx.redirectTo({
    //   url: '/pages/hu1/hu1',
    // })
    // wx.switchTab({
    //   url: '/pages/hu/hu',
    // })
    this.setData({hu:"ddddddd"})
    
    wx.navigateTo({
      url: '/pages/hu1/hu1'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var that = this;
      wx.request({
        url: 'http://localhost:3000',
        success(res){
          // console.log(res)
          that.setData({cities:res.data.result})
          // app.globalData.userInfo = res.data
          // console.log(that.data.hu)  
        }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})