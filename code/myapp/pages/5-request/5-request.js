// pages/5-request/5-request.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datalist:[]
  },

  handleAjax(){
    //数据

    // 1-没有跨域限制
    // 2-安全域名添加。
    wx.request({
      url: 'https://m.maoyan.com/ajax/movieOnInfoList?token=&optimus_uuid=74B5F0A032A711EB82DD6B9282E93C676D27D7B9731D4E608D7612C3E708C120&optimus_risk_level=71&optimus_code=10',
      method:"get",
      data:{

      },
      success:(res)=>{
        console.log(res.data)
        this.setData({
          datalist:res.data.movieList
        })
      },
      fail:()=>{

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
    this.handleAjax()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("show")
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("hide")
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