// pages/welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:"../../images/shukuang.gif",
    region: [],
    customItem: ""
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },

  formSubmit: function (e) {
    console.log(e.detail.value.city);
    let res = e.detail.value;
    let city = res.city.toString();

    //增加数据
    wx.cloud.database().collection('useInfo').add({
      data: {
        city: city,
        telephone: res.celePhone,
        telephone2: res.relativeCelePhone,
        name: res.name,
        comunity: res.comunity,
      }
    })
      .then(res => {
        console.log('add success!' + res);
        wx.showToast({
          title: '注册成功！',
        })
        wx.switchTab({
          url: '../home/home',
        })
      })
      .catch(err => {
        console.log('add fail' + err);
      })
    //查询数据
    // wx.cloud.database().collection('useInfo').get().then(res => {
    //   console.log('success!');
    // })
    //   .catch(err => {
    //     console.log('fail');
    //   })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    
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