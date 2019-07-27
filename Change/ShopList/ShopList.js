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
    /*商家信息组件*/
    bsnsInfo:[
      {
        img:"../../../images/icon/first.png",
        name:"商家1",
        ads:"福建漳州招商局经济技术开发区厦门大学漳州校区",
        grade: "1",
        link: '../DetailShopList/DetailShopList'
      }, {
        img: "../../../images/icon/first.png",
        name: "商家2",
        ads: "福建漳州招商局经济技术开发区厦门大学漳州校区",
        grade: "2",
        link: '../DetailShopList/DetailShopList'
      }, {
        img: "../../../images/icon/first.png",
        name: "商家3",
        ads: "福建漳州招商局经济技术开发区厦门大学漳州校区",
        grade: "3",
        link: '../DetailShopList/DetailShopList'
      }, {
        img: "../../../images/icon/first.png",
        name: "商家4",
        ads: "福建漳州招商局经济技术开发区厦门大学漳州校区",
        grade: "4",
        link: "../DetailShopList/DetailShopList"
      }, {
        img: "../../../images/icon/first.png",
        name: "商家5",
        ads: "福建漳州招商局经济技术开发区厦门大学漳州校区",
        grade: "5",
        link: '../DetailShopList/DetailShopList'
      }
    ]
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
    console.log('onConfirm', e)
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
    var th = this;
    wx.request({
      url: 'http://129.211.84.118:80/PhpFiles/ShopList.php',
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