// pages/4-wxs/4-wxs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mytext:"",
    startTime: 1624676059976,
    goodsList:["aaa","abc","ddd","acc","bcc","abd","bcd","acd"]
  },

  // handleDate(){
  //   return  "1111111111"
  // },

  handleInput(ev){
    // console.log(ev.detail.value)
    this.setData({
      mytext:ev.detail.value
    })
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

  }
})