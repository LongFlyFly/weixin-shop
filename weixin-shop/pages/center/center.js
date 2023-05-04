import CheckAuth from "../../util/auth"

// pages/center/center.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo:null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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
        CheckAuth(()=>{
            this.setData({
                userInfo:wx.getStorageSync('token')
            })
        })
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

    },
    // 点击切换头像
    handleTap(){
        wx.chooseImage({
          count: 1,
          sizeType:['original','compressed'],
          sourceType:['album','camera'],
          success:(res)=>{
              const tempFilePaths = res.tempFilePaths
              this.setData({
                  userInfo:{
                      ...this.data.userInfo,
                      avatarUrl:tempFilePaths[0]
                  }
              })

              wx.setStorageSync('token', {
                  ...wx.getStorageSync('token'),
                  avatarUrl:tempFilePaths[0]
              })
          }
        })
    }
})