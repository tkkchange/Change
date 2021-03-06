import { $wuxToast } from '../../dist/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*课程信息组件*/
    cusInfo: [
      {
        img: "../../../images/icon/first.png",
        name: "课程1",
        tea: "老师A",
        price: "198",
        price_type: '元/小时',
        crowd: '18岁以上',
        link: '../DetailItemList/DetailItemList'
      },
      {
        img: "../../../images/icon/first.png",
        name: "课程2",
        tea: "老师B",
        price: "98",
        price_type: '元/天',
        crowd: '18岁以上',
        link: '../DetailItemList/DetailItemList'
      },
      {
        img: "../../../images/icon/first.png",
        name: "课程3",
        tea: "老师C",
        price: "998",
        price_type: '元/节',
        crowd: '18岁以上',
        link: '../DetailItemList/DetailItemList'
      },
      {
        img: "../../../images/icon/first.png",
        name: "课程4",
        tea: "老师D",
        price: "298",
        price_type: '元/小时',
        crowd: '18岁以上',
        link: '../DetailItemList/DetailItemList'
      },
      {
        img: "../../../images/icon/first.png",
        name: "课程5",
        tea: "老师E",
        price: "398",
        price_type: '元/小时',
        crowd: '18岁以上',
        link: '../DetailItemList/DetailItemList'
      }, 
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
    //向数据库发送商家名
    wx.request({
      url: 'http://129.211.84.118:80/PhpFiles/DetailShopList.php', 
      method: "POST",
      header: {
        //传输接收数据的头
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        confirmname: options.name
      },

      success: function (res) {
        console.log(res.data)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  showToast: function() {
    $wuxToast().show({
      type: 'success',
      duration: 1500,
      color: '#fff',
      text: '已关注',
    })
  },
  /**显示优惠券不能领取的toast*/
  showToast1() {
    $wuxToast().show({
      type: 'failed',
      duration: 1500,
      color: '#fff',
      text: '暂无优惠券领取~',
      success: function () {
      }
    })
  },
  bindmap: function(){
    wx.navigateTo({
      url: '../Map/Map',
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
    
  }
})