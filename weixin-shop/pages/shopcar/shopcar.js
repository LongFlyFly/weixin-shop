// pages/shopcar/shopcar.js
import CheckAuth from '../../util/auth'
import request from '../../util/request'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        slideButtons:[{
            type:'warn',
            text:'删除'
        }],
        cartList:[]
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
           let {nickName} = wx.getStorageSync('token')
           let tel = wx.getStorageSync('tel')
            request({
                url:`/carts?_expand=good&username=${nickName}&tel=${tel}`
            }).then(res=>{
                this.setData({
                    cartList:res
                })
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
    slideButtonTap(evt){
        var id = evt.currentTarget.dataset.id
        this.setData({
            cartList:this.data.cartList.filter(item=>item.id!==id)
        })
        request({
            url:`/carts/${id}`,
            method:"delete"
        })
    },
    handleTap(evt){
        var item = evt.currentTarget.dataset.item
        item.checked = !item.checked
        this.handleUpdate(item)
    },
    // 减处理
    handleMinus(evt){
        var item = evt.currentTarget.dataset.item
        if(item.number===1){
            return
        }
        item.number--
        this.handleUpdate(item)
    },
    // 加处理
    handleAdd(evt){
        var item = evt.currentTarget.dataset.item
        item.number++
        this.handleUpdate(item)
    },
    handleUpdate(item){
        this.setData({
            cartList:this.data.cartList.map(data=>{
                if(data.id===item.id){
                    return item
                }
                return data
            })
        })

        request({
            url:`/carts/${item.id}`,
            method:"put",
            data:{
              "username":item.username,
              "tel":item.tel,
              "goodId":item.goodId,
              "number":item.number,
              "checked":item.checked
            }
        })
    },
    // 全选与反选
    handleAllChecked(evt){
        if(evt.detail.value.length===0){
          //未全选 
          this.setData({
            cartList:this.data.cartList.map(item=>({
                ...item,
                checked:false
            }))
          })
        }else{
          // 全选
          this.setData({
            cartList:this.data.cartList.map(item=>({
                ...item,
                checked:true
            }))
          })
        }
    }
})