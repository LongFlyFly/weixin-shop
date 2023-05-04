// pages/home/home.js
import request from '../../util/request'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        lookList:[],
        goodList:[]
    },

    current:1,
    total:0,
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        this.renderSwiper()
        this.renderGoods()
    },
    renderSwiper(){
        request({
          url: '/recommends',
        }).then((res)=>{
           this.setData({
               lookList:res
           })
        })
    },
    renderGoods(){
        request({
            url:`/goods?_page=${this.current}&_limit=5`
        },true).then(res=>{
            this.total = Number(res.total)
            this.setData({
                goodList:[ ...this.data.goodList, ...res.list ]
            })
        })
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
        // 下拉刷新
        setTimeout(()=>{
            // 更新数据
            wx.stopPullDownRefresh()  //更新完数据后，停止下拉刷新
        },1000)
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
      
        if(this.data.goodList.length === this.total){
            return 
        }

        // 每次触底，刷新页码
        this.current++
        this.renderGoods()
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {
       
    },

    //搜索
    handleEvent(){
        wx.navigateTo({
          url: '/pages/search/search',
        })
    },

    handleChangePage(e){
        var id = e.currentTarget.dataset.id
        var name = e.currentTarget.dataset.name
        wx.navigateTo({
          url: `/pages/detail/detail?id=${id}&name=${name}`,
        })
        //  wx.redirectTo({}) 关闭当前页面跳转
        //  wx.switchTab({})  底部跳转
    }
})