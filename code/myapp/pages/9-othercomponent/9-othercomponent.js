// pages/9-othercomponent/9-othercomponent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkList:[
      {
        id:1,
        name:"aaa",
        price:100,
        number:1,
        isChecked:true
      },
      {
        id:2,
        name:"bbb",
        price:200,
        number:2,
        isChecked:false
      },
      {
        id:3,
        name:"ccc",
        price:300,
        number:3,
        isChecked:false
      }
    ]
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

  handeTap(evt){
    console.log("click",evt.target.dataset.index)
    var index = evt.target.dataset.index
    this.data.checkList[index].isChecked = !this.data.checkList[index].isChecked
    
    // console.log(this.data.checkList)
    this.setData({
      checkList:[
        ...this.data.checkList
      ]
    })
  }
})