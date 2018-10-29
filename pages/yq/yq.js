// pages/myCart/myCart.js
 var  app =getApp();   // 获取全局
Page({
    /**
     * 页面的初始数据
     */
    data: {
      indicatorDots:false,
      autoplay:true,
      interval: 5000,
      duration: 500,
      circular:false,
      buttonShow:true,
      imgUrls: [
          'http://ph74ojxc5.bkt.clouddn.com/01.jpeg',
          'http://ph74ojxc5.bkt.clouddn.com/02.jpg',
          'http://ph74ojxc5.bkt.clouddn.com/03.jpg',
          'http://ph74ojxc5.bkt.clouddn.com/06.jpg',
        ],
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
       var that=this;
      //  console.log(app.globalData.userInfo)
       that.setData({
          navigationBarText:app.globalData.userInfo
       })
    },
    btnToAll:function(){
       wx.switchTab({
         url:"../index/index"
       })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
       var that =this;
      var length=that.data.imgUrls.length;
      if(length-1>=4){
        that.setData({
          // buttonShow:!that.data.buttonShow
        })
      }
      
      //  wx.setNavigationBarTitle({"title":that.data.navigationBarText})
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