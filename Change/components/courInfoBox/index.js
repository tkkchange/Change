Component({

  properties: {

    img: {    //显示课程图片
      type: String,
      value: '1'
    },
    name: {       //显示课程名称
      type: String,
      value: '2'
    },
    tea: {     //显示教师名称
      type: String,
      value: '无'
    },
    price: {    //课程价位
      type: Number,
      value: '0.00'
    },
    price_type: {    //价位类别
      type: String,
      value: '/小时'
    },
    crowd: {     //显示适宜人群
      type: String,
      value: '无'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})
