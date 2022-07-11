const app = getApp();
const db = wx.cloud.database();
const _ = db.command;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: "../../images/cover.png",

    animation1: null,
    animation2: null,
    animation3: null,
    logged: "",//登陆状态
    //弹窗
    show: false,
    buttons: [
      {
        type: 'default',
        className: '',
        text: '再想想',
        value: 0
      },
      {
        type: 'primary',
        className: '',
        text: '同意',
        value: 1
      }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let that = this;
    let animation1 = wx.createAnimation({
      duration: 1500,
      timingFunction: "ease",//动画低速开始，加快，再减慢
      delay: 1000,
      transformOrigin: "50% 50%",//动画圆心点
    })
    let animation2 = wx.createAnimation({
      duration: 3000,
      timingFunction: "ease",//动画低速开始，加快，再减慢
      delay: 2000,
      transformOrigin: "50% 50%",//动画圆心点
    })
    let animation3 = wx.createAnimation({
      duration: 3500,
      timingFunction: "ease",//动画低速开始，加快，再减慢
      delay: 2000,
      transformOrigin: "50% 50%",//动画圆心点
    })

    animation1.scale(3, 3).opacity(0).step(animation2.opacity(0).step(animation3.scale(3, 3).opacity(0).step()));

    setTimeout(function () {
      that.setData({
        show: true
      })
    }, 3800)
    that.setData({
      animation1: animation1.export(),
      animation2: animation2.export(),
      animation3: animation3.export(),
    })


  },

  login: function () {
    wx.cloud.callFunction({
      name:"login",//获取openid
      success:function(res){
        console.log("your openid is : "+res.result.openid);
        let openid = res.result.openid;
        wx.navigateTo({
          url: '../Info/Info',
        })
      }
    })
    let that = this;
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  buttontap(e) {
    console.log(e.detail)
    if (e.detail.index == 1) {
      this.login();
      this.setData({
        show: false
      })
    }
    else if (e.detail.index == 0) {

    }
  },
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