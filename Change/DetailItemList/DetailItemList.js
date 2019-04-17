import { $wuxToast } from '../../dist/index'
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
    indicatorDots: true,  //小点
    autoplay: true,  //是否自动轮播
    interval: 5000,  //间隔时间
    duration: 3000,  //滑动时间
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /**
     * 动态传参设置标题
     */
    wx.setNavigationBarTitle({
      title: options.name
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
    
  },
  purchase:function(e){
    wx.navigateTo({
      url: '../ConfirmConsume/ConfirmConsume',
    })
  },
  //收藏
  collection: function () {
    $wuxToast().show({
      type: 'success',
      duration: 1500,
      color: '#fff',
      text: '已收藏',
    })
  }
})