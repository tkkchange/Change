Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*课程信息组件*/
    bsnsInfo: [
      {
        img: "../../../images/icon/first.png",
        name: "商家1",
        ads: "福建漳州招商局经济技术开发区厦门大学漳州校区",
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
    
  }
})