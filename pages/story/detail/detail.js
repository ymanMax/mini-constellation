Page({
  data: {
    starData: {}
  },

  onLoad(options) {
    if (options.starData) {
      const starData = JSON.parse(decodeURIComponent(options.starData));
      this.setData({
        starData: starData
      });
    }
  }
});