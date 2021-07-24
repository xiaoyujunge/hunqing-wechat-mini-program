Page({
  data: {
    swiperImgUrls: [
      '../images/1.jpg',
      '../images/2.jpg',
      '../images/3.jpg',
    ],
    photoUrl: [
      '../images/4.jpg',
      '../images/5.jpg',
      '../images/6.jpg',
      '../images/7.jpg',
      '../images/8.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
  },
  onShow: function() {
    this.audioCtx = wx.createAudioContext('greetings');
    this.audioCtx.play()
  },
})