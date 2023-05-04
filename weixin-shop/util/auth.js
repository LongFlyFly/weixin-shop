function CheckAuth(callback){
    if(wx.getStorageSync('tel')){
        // 处理业务
        callback()
    }else{
        // 判断是否有token
        if(wx.getStorageSync('token')){
            // 有token跳转到电话
            wx.navigateTo({
              url: '/pages/telform/telform',
            })
        }else{
            // 没有token跳转到权限登录
            wx.navigateTo({
              url: '/pages/auth/auth',
            })
        }
    }
}

export default CheckAuth