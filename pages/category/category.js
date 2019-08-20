var app = getApp();
Page({
  data: {
    winHeight: "", //window height
    currentTab: 0, //preset value
    scrollLeft: 0, //tab initial position
    expertList: [{
      // reference from database
    }]
  },

  //switch the tab
  switchTab: function(e) {
    console.log(e.detail)
    //e.detail.current
    //which tab now
    switch (e.detail.current) {
      //Food
      case 0:
        this.setData({
          currentTab: e.detail.current,
          expertList: [{
            //reference from database
          }]
        });
        break;

        //Cloth
      case 1:
        this.setData({
          currentTab: e.detail.current,
          expertList: [{
            //reference from database
          }]
        });
        break;

        //Commonly
      case 2:
        this.setData({
          currentTab: e.detail.current,
          expertList: [{
            //reference from database
          }]
        });
        break;

        //Cosmetic
      case 3:
        this.setData({
          currentTab: e.detail.current,
          expertList: [{
            //reference from database
          }]
        });
        break;

        //Digital
      case 4:
        this.setData({
          currentTab: e.detail.current,
          expertList: [{
            //reference from database
          }]
        });
        break;

        //Jewelry
      case 5:
        this.setData({
          currentTab: e.detail.current,
          expertList: [{
            //reference from database
          }]
        });
        break;

        //Drug
      case 6:
        this.setData({
          currentTab: e.detail.current,
          expertList: [{
            //reference from database
          }]
        });
        break;

        //Book
      case 7:
        this.setData({
          currentTab: e.detail.current,
          expertList: [{
            //reference from database
          }]
        });
        break;
    }
    this.checkCor();
  },

  //change the tab by click
  swichNav: function(e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      })
    }
  },

  //tabs scroll automatically
  checkCor: function() {
    if (this.data.currentTab > 4) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
  onLoad: function() {
    var that = this;
    //automatic height adaptation
    wx.getSystemInfo({
      success: function(res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 100;
        console.log(calc)
        that.setData({
          winHeight: calc
        });
      }
    });
  },
  footerTap: app.footerTap
})