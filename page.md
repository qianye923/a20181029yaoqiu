###    wx.switchTab({  url: '' })只能跳转带有tabbar的页面;   wx.redirectTo({  url: '' })和wx.navigateTo({  url: '' })不能跳转tabbar绑定过的页面;  


###   wx.showToast()  和wx.hideToast()



## 页面数据请求

### 01

    <!-- 头部图片的轮播 -->
       url:"https://api.it120.cc/tz/banner/list",
       data: {
        key: 'mallName'
      },

### 02


  <!-- 导航条的链接 -->
  url: 'https://api.it120.cc/' + app.globalData.subDomain + '/shop/goods/category/all',
