// pages/category/category.js
import request from '../../util/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    vtabs:[],
    activeTab:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    request({
      url:"/categories?_embed=goods"
    }).then(res=>{
      console.log(res)
      this.setData({
        vtabs:res
      })
    })
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

  handleTap(evt){
    console.log(evt.currentTarget.dataset.id)
    var id = evt.currentTarget.dataset.id
    var name = evt.currentTarget.dataset.name
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}&name=${name}`,
    })
  }
})