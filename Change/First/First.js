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
    mItem:[
      {
        name: '绘画',
        imgurl: '../../images/first/hh.png'
      },
      {
        name: '舞蹈',
        imgurl: '../../images/first/wd.png'
      },
      {
        name: '吉他',
        imgurl: '../../images/first/jt.png'
      },
      {
        name: '钢琴',
        imgurl: '../../images/first/gq.png'
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