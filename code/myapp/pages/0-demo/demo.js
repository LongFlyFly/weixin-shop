// pages/demo/demo.js

// 注册页面的方法
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myname:"kerwin",
    ids:["aaa","bbb","ccc"],
    list:["kerwin","tiechui","ximen","tiezhu"],
    isCreated:true,
    isHidden:false
  },//状态


  handleTap(){
    // console.log("click",this.data.myname)
    // this.data.myname = "xiaoming"

    this.setData({
      myname:"xiaoming",
      isCreated:!this.data.isCreated,
      isHidden:!this.data.isHidden
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