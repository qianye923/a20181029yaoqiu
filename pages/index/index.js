Page({
  data:{
    indicatorDots:true,
    interval:3000,
    autoplay:true,
    duration:2000,
    bannerImg:[],
    navBarLink: [],
    actId:0
  },
  onLoad:function(options){
    var that=this;
    // 生命周期函数--监听页面加载
    //  01请求首页头图的数据
    wx.request({
       url:"https://api.it120.cc/tz/banner/list",
       data: {
        key: 'mallName'
      },
      success:function(res){
        // console.log(res)
        if(res.statusCode==200){
           that.setData({
             bannerImg:res.data.data
           })
        }else{
           wx.showToast({
             title:"没有数据O**0",
             icon:"loading",
             duration:"1500",
             mask:"true"
           })
        }
      }
    })

    // 02导航条的数据的请求

    wx.request({
      url:"https://api.it120.cc/tz/shop/goods/category/all",
      success:function(res){
        console.log(res.data.data)
        var allIten = [{
          id: 0,
          key:0,
          name:"全部"
        }]
        if (res.statusCode == 200) {
         var Allnavlist= allIten.concat(res.data.data)
           console.log(Allnavlist)
            that.setData({
              navBarLink:Allnavlist
            })
         }
      }
    })


  },
  scrollItemClick: function (e) {
    console.log(e.currentTarget.id)
    this.setData({
      actId:e.currentTarget.id
    }),
    this.listInfo(e.currentTarget.id)
  },
  listInfo(gooodId) {
    wx.request({
      url: 'https://api.it120.cc/tz/shop/goods/list',
      data: {
        categoryId:gooodId,
        // nameLike: that.data.searchInput
      },
      success: function (res) {
        console.log(res)
      }
     })
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
   
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
   
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
   
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
  
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
 
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})