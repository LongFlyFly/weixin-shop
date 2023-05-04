function request(parmas,isHeader=false){
    return new Promise((resolve,reject)=>{
        wx.request({
          ...parmas,
          url:'http://localhost:5000'+parmas.url,
          success:(res)=>{
              if(isHeader){
                  resolve({
                      list:res.data,
                      total:res.header["X-Total-Count"]
                  })
              }else{
                   resolve(res.data) 
              }
          },
          fail:(err)=>{
            reject(err)
          }
        })
    })
}
export default request