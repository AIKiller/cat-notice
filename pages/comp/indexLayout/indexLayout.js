// pages/comp/indexLayout/indexLayout.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    current: 0,
    navBarHeight: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    navBarLoad: function (e) {
      this.setData({
        navBarHeight: e.detail.navBarHeight
      })
      console.log(e)
    },

    change: function (e) {
      this.setData({
        current: e.detail.current
      })
    },

    alert1: function (e) {
      wx.showToast({
        title: "点击成功" + e.currentTarget.dataset.d,
        icon: 'none',
        duration: 2000
      });
    }
  }
})
