// components/navbar/navbar.js

//注册一个组件
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type: Array,
      value: ["正在热映","即将上映"],
    },
    current:{
      type:Number,
      value:0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // datalist:["正在热映","即将上映"],
    // current:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(evt){
      // this.setData({
      //   current:evt.currentTarget.dataset.index
      // })

      this.triggerEvent("ParentEvent",evt.currentTarget.dataset.index)
    }
  }
})
