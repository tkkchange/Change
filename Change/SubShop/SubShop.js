Page({

  /**
   * 页面的初始数据
   */
  data: {
    datalist:[
      {
        title:"第一家店铺",
        img:"/images/First/1.jpg",
        url:"/Change/DetailShopList/DetailShopList",
        extra:"文字说明1"
      },
      {
        title: "第二家店铺",
        img: "/images/First/2.jpg",
        url: "/Change/DetailShopList/DetailShopList",
        extra: "文字说明2"
      }
    ]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://129.211.84.118:80/PhpFiles/SubShoptest.php',
      method: 'POST',
      data: {
        User_id:12345601
        },
      header: {
        'content-type': 'application/x-www-form-unlencoded'
      },
      success: function (res) {
        console.log(res);
        
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