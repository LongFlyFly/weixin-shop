// pages/detail/detail.js
const {default:request} = require("../../util/request")
import CheckAuth from '../../util/auth'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        info:null,
        current:0,
        commentList:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        wx.setNavigationBarTitle({
          title: options.name,
        })
        this.getDetailInfo(options.id)
        this.getCommentInfo()
    },
    // 评论
    getCommentInfo(){
        request({
            url:"/comments"
        }).then(res=>{
            this.setData({
                commentList:res
            })
        })
    },

    getDetailInfo(id){
        request({
          url: `/goods/${id}`,
        }).then(res=>{
            this.setData({
                info:res
            })
        })
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
    // 全屏预览
    handelTap(e){
        wx.previewImage({
          current:e.currentTarget.dataset.current,
          //   把每一个图片的路径映射出来
          urls: this.data.info.slides.map(item=>`http://localhost:5000${item}`),
        })
    },

    // 点击切换预览
    handleActive(e){
        this.setData({
            current:e.currentTarget.dataset.index
        })
    },
    handAdd(){
        // 判断本地存储是否有手机号信息，如果有，直接加入
        // 没有手机号，看是否有token信息
        // 没有token，进入授权
        CheckAuth(()=>{
            console.log("准备加入购物车");
            let {nickName} = wx.getStorageSync('token')
            let tel = wx.getStorageSync('tel')
            var goodId = this.data.info.id

           request({
              url: '/carts',
              data: {
                tel,
                goodId,
                nickName
              },
            }).then(res=>{
                if(res.length===0){
                    return request({
                        url:'/carts',
                        methods:"post",
                        data:{
                            "username":nickName,
                            "tel":tel,
                            "goodId":goodId,
                            "number":1,
                            "checked":false
                        }
                    })
                }else{
                    return request({
                        url:`/carts/${res[0].id}`,
                        methods:"put",
                        data:{
                           ...res[0],
                           number:res[0].number+1
                        }
                    })
                }
            }).then(res=>{
                wx.showToast({
                  title: '加入购物车成功',
                })
            })
        })
    },

    handChange(){
        wx.switchTab({
          url: '/pages/shopcar/shopcar',
        })
    }
})