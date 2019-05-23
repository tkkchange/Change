import { $wuxToast } from '../../dist/index'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    aItem:[
      {
        name: '关注店铺',
        number: 10,
        link: "../SubShop/SubShop"
      },
      {
        name: '收藏课程',
        number: 4,
        link: "../ValuedLesson/ValuedLesson"
      }
    ],
    mItem: [
      {
        name: '我的课程',
        imgurl: '../../images/icon/course.png',
        link: "../MyLesson/MyLesson"
      },
      {
        name: '我的订单',
        imgurl: '../../images/icon/order.png',
        link: "../OrderFormList/OrderFormList"
      },
      {
        name: '我的优惠券',
        imgurl: '../../images/icon/yhq.png',
        link: "../MySpecialDiscoun/MySpecialDiscoun"
      },
    ],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../ChangeData/ChangeData'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
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

  //显示toast
  showToast() {
    $wuxToast().show({
      duration: 4000,
      color: '#fff',
      text: '有任何建议请联系微信：paul-0823，感谢',
      success: function () {
      }
    })
  }
})