// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: "../../images/home.png",
    diedaoArr: {
      title1: '查看是否报警',
      data1: 'NO',
      title2: '查看是否跌倒',
      data2: 'NO',
      time:"",
    },
    shiduArr:  {
      title: '室内湿度',
      data: '456',
      time:''
    },
    wenduArr:  {
      title: '室内温度',
      data: '357',
      time:""
    },
    xinyaArr:  {
      title: '老人心压',
      data: '678',
      time:""
    },


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDeviceInfo();

  },
  diedao: function () {
    let diedao = JSON.stringify(this.data.diedaoArr)
    wx.navigateTo({
      url: '../diedaoData/diedao?Arr=' + diedao,
    })
  },
  shidu: function () {
    let shidu = JSON.stringify(this.data.shiduArr)
    wx.navigateTo({
      url: '../shiduData/index?Arr=' + shidu,
    })
  },
  wendu: function () {
    let wendu = JSON.stringify(this.data.wenduArr)
    wx.navigateTo({
      url: '../wenduData/index?Arr=' + wendu,
    })
  },
  xinya: function () {
    let xinya = JSON.stringify(this.data.xinyaArr)
    wx.navigateTo({
      url: '../xinyaData/index?Arr=' + xinya,
    })
  },

  getDeviceInfo: function () {
    let that = this;
    wx.request({
      url: 'http://api.heclouds.com/devices/611378846/datapoints',//API地址
      header: {
        "api-key": "sSEfNI52BkIrwjp5SWfGb4WCEfk=",
        //换成自己的api-key
        "content-text":"application/json"
      },
      data: {
        limit: 20,
        // start = 2021-09-26,
        // end = 2021-09-27,
        // duration = 3600
        // device: "RPI02",
      },
      method: "GET",
      success: function (e) {
        console.log(e.data.data)
        let Allarray = e.data.data
        console.log(Allarray.datastreams[1])
        // diedao
        that.data.diedaoArr.data1 = Allarray.datastreams[0],
        that.data.diedaoArr.time1 = Allarray.datastreams[0],
        that.data.diedaoArr.data2 = Allarray.datastreams[2],
        that.data.diedaoArr.time2 = Allarray.datastreams[2],
        // shidu
        that.data.shiduArr.time = Allarray.datastreams[1].datapoints[0].at
        that.data.shiduArr.data = Allarray.datastreams[1].datapoints[0].value
        // wendu
        that.data.wenduArr.time = Allarray.datastreams[3].datapoints[0].at
        that.data.wenduArr.data = Allarray.datastreams[3].datapoints[0].value
        console.log(that.data.shiduArr)
      }
    })
    // wx.request({
    //   url: 'https://api.heclouds.com/devices/616221582/datapoints',   //将请求行中的数字换成自己的设备ID
    //   header: {
    //     "api-key": "2DcaOUvJB1YENB6Q6oEDY027fp4="
    //     //换成自己的api-key
    //   },
    //   data: {
    //     limit: 1
    //   },
    //   method: "GET",
    //   success: function (e) {
    //     console.log(e.data.data)
    //     console.log(that.data.wenduArr.data);
    //     that.data.wenduArr.data = e.data.data.datastreams[1].datapoints[0].value;
    //     that.data.wenduArr.time = e.data.data.datastreams[1].datapoints[0].at;
    //     console.log(that.data.wenduArr.data);
    //     console.log(that.data.wenduArr.time);
        
    //   }
    // })
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