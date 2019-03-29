import schBox from '../components/searchBox/index';
//index.js
//获取应用实例
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*图片轮播*/ 
    imgUrls: [
      {
        link: '/pages/index/index',
        url: '../../images/First/1.jpg'
      }, {
        link: '/pages/logs/logs',
        url: '../../images/First/2.jpg'
      }, {
        link: '/pages/index/index',
        url: '../../images/First/3.jpg'
      }
    ],
    /*类别推荐*/
    mItem:[
      {
        name: '绘画',
        imgurl: '../../images/First/hh.png', 
        link:"../Map/Map"
      },
      {
        name: '舞蹈',
        imgurl: '../../images/First/wd.png', 
        link: "../Map/Map"
      },
      {
        name: '吉他',
        imgurl: '../../images/First/jt.png', 
        link: "../Map/Map"
      },
      {
        name: '钢琴',
        imgurl: '../../images/First/gq.png', 
        link: "../Map/Map"
      }
    ],
    /*推荐商家*/
    busiList:[
      {
        link: '../Map/Map',
        imgUrl:'../../images/First/1.jpg',
        name: '商家A',
        intro: "One-Hour SC）的事业是立足综合集成高技术服务的现代服务业，也是世界唯一的高科技产品维修服务连锁综合服务运营商；"
      }, 
      {
        link: '../Map/Map',
        imgUrl: '../../images/First/2.jpg',
        name: '商家B',
        intro: "One-Hour SC）的事业是立足综合集成高技术服务的现代服务业，也是世界唯一的高科技产品维修服务连锁综合服务运营商；"
      }, 
      {
        link: '../Map/Map',
        imgUrl: '../../images/First/3.jpg',
        name: '商家C',
        intro:"One-Hour SC）的事业是立足综合集成高技术服务的现代服务业，也是世界唯一的高科技产品维修服务连锁综合服务运营商；"
      }
    ],
    indicatorDots: true,  //小点
    autoplay: true,  //是否自动轮播
    interval: 5000,  //间隔时间
    duration: 3000,  //滑动时间

    /*搜索框传值*/

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
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