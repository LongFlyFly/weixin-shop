// pages/7-swiper/7-swiper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datalist:[]
  },

  handleAjax(){
    wx.request({
      url: 'https://api.juooo.com/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.1.40&referer=2',
      success:(res)=>{
        console.log(res.data.data.slide_list)
        this.setData({
          datalist:res.data.data.slide_list
        })
      }
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