// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:0,

    cateItems:['衣服','裤子','帽子'],

    cateList:["衣服的相关数据","裤子的相关数据","帽子的相关数据"]
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

  handleChange(evt){
    console.log(evt.detail.current)
    this.setData({
      current:evt.detail.current
    })
  },

  handleEvent(evt){
    console.log("父组件定义，执行",evt.detail)

    this.setData({
      current:evt.detail
    })
  }
})