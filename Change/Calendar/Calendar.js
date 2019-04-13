var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    year: new Date().getFullYear(),      // 年份
    month: new Date().getMonth() + 1,    // 月份
    day: new Date().getDate(),
    demo4_days_style: [],
  },
  //返回课程表按钮事件
  returntimetable: function(){
    wx.switchTab({
      url: '../Timetable/Timetable'
    })
  },
  //设置时间
  onLoad: function () {
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      time: time
    });
    //日历样式表
    const days_count = new Date(this.data.year, this.data.month, 0).getDate();
    let demo4_days_style = new Array;
    for (let i = 1; i <= days_count; i++) {
      if (i == 3) {
        demo4_days_style.push({
          month: 'current', day: i, color: 'white', background: '#46c4f3'
        });
      } else if (i == 7) {
        demo4_days_style.push({
          month: 'current', day: i, color: 'white', background: '#ffb72b'
        });
      } else if (i == 12 || i == 23 || i == 24) {
        demo4_days_style.push({
          month: 'current', day: i, color: 'white', background: '#865fc1'
        });
      } else if (i == 21 || i == 22) {
        demo4_days_style.push({
          month: 'current', day: i, color: 'white', background: '#eb4986'
        });
      } else {
        demo4_days_style.push({
          month: 'current', day: i, color: '#59518d'
        });
      }
    }
    this.setData({
      demo4_days_style
    });
  },
 })