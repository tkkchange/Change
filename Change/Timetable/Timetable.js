Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      id: 'view',
      name: '课程1',
      open: false,
      pages: ['时间：', '地点：']
    }, {
      id: 'content',
      name: '课程2',
      open: false,
      pages: ['时间：', '地点：']
    }, {
      id: 'form',
      name: '课程3',
      open: false,
      pages: ['时间：', '地点：']
    }],


    

    imgUrls: [
      '../../images/First/1.jpg',
      '../../images/First/2.jpg',
      '../../images/First/3.jpg'
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s
  },

  kindToggle(e) {
        const id = e.currentTarget.id
        const list = this.data.list
        for (let i = 0, len = list.length; i < len; ++i) {
        if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    } 
    /**
    * key和value名称一样时，可以省略
    * 
    * list:list=>list
    */
    this.setData({
      list
      })
  },

  adddetial: function () {
    wx.navigateTo({

      url: '../Calendar/Calendar',

      success: function (res) { },

      fail: function (res) { },

      complete: function (res) { },

    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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