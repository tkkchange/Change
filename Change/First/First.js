//index.js
//获取应用实例
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    /*图片轮播*/ 
    imgUrls: [
      {
        link: '/pages/index/index',
        url: '../../images/shoplist/1.png'
      }, {
        link: '/pages/logs/logs',
        url: '../../images/shoplist/1.png'
      }, {
        link: '/pages/index/index',
        url: '../../images/shoplist/1.png'
      }
    ],
    indicatorDots: true,  //小点
    autoplay: true,  //是否自动轮播
    interval: 5000,  //间隔时间
    duration: 3000,  //滑动时间
    /*类别推荐*/
    mItem:[
      {
        name: '绘画',
        imgurl: '../../images/First/hh.png', 
        link:"../ShopList/ShopList"
      },
      {
        name: '围棋',
        imgurl: '../../images/First/wq.png', 
        link: "../ShopList/ShopList"
      },
      {
        name: '编程班',
        imgurl: '../../images/First/bc.png',
        link: "../ShopList/ShopList"
      },
      {
        name: '舞蹈',
        imgurl: '../../images/First/wd.png',
        link: "../ShopList/ShopList"
      },
      {
        name: '吉他',
        imgurl: '../../images/First/jt.png', 
        link: "../ShopList/ShopList"
      },
      {
        name: '钢琴',
        imgurl: '../../images/First/gq.png', 
        link: "../ShopList/ShopList"
      }
    ],
    /*推荐商家*/
    busiList:[
      {
        id: "",
        imgUrl:'../../images/shoplist/1.png',
        name: '商家A',
        intro: "One-Hour SC）的事业是立足综合集成高技术服务的现代服务业，也是世界唯一的高科技产品维修服务连锁综合服务运营商；"
      }, 
      {
        id: "",
        imgUrl: '../../images/shoplist/1.png',
        name: '商家B',
        intro: "One-Hour SC）的事业是立足综合集成高技术服务的现代服务业，也是世界唯一的高科技产品维修服务连锁综合服务运营商；"
      }, 
      {
        id: "",
        imgUrl: '../../images/shoplist/1.png',
        name: '商家C',
        intro:"One-Hour SC）的事业是立足综合集成高技术服务的现代服务业，也是世界唯一的高科技产品维修服务连锁综合服务运营商；"
      }
    ]

    /*搜索框传值*/

  },
  onChange(e) {
    console.log('onChange', e)
    this.setData({
      value: e.detail.value,
    })
  },
  onFocus(e) {
    console.log('onFocus', e)
  },
  onBlur(e) {
    console.log('onBlur', e)
  },
  onConfirm(e) {
    wx.request({
      url: 'http://129.211.84.118:80/PhpFiles/search.php',
      method: 'GET',
      data: {
        name:e.detail.value
      },
      success: function (res) {
        console.log('oc',res.data);
        wx.redirectTo({
          url: '../ShopList/ShopList',
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
      },
      fail: function (res) {
        console.log('f',res);
      }
    })
  },
  onClear(e) {
    console.log('onClear', e)
    this.setData({
      value: '',
    })
  },
  onCancel(e) {
    console.log('onCancel', e)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 500,
      mask: true
    })
    var th = this;
    wx.request({
      url: 'http://129.211.84.118:80/PhpFiles/First.php',
      method: 'GET',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res);
        th.setData({
          result: res.data
        })
      }
    })
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