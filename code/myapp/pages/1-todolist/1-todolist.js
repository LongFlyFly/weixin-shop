// pages/1-todolist/1-todolist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mytext:"",
    datalist:["111","222","3333"]
  },

  handleInput(evt){
    // console.log("input",evt.detail.value)
    this.setData({
      mytext:evt.detail.value
    })
  },

  handleAdd(){
    console.log(this.data.mytext)

    // this.data.datalist

    this.setData({
      datalist:[...this.data.datalist,this.data.mytext],
      mytext:""
    })
  },

  handleDelete(evt){
    // console.log("delte",evt.target.dataset.myid)

    this.data.datalist.splice(evt.target.dataset.myid,1)
    this.setData({
      datalist:this.data.datalist
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