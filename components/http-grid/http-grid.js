// components/http-grid/http-grid.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    url:{
      type:String,
      value:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    datas:[
      { title: "test", faceUrl:"../../images/banner2.jpg",rating:{block:"../../images/icon_star_2_5.png",aver:7.5}}
    ],
    currentPage:0,
    pageLimit:15
  },

  /**
   * 组件的方法列表
   */
  methods: {
    refresh(){

    }
  }
})
