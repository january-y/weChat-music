// pages/main-video/main-video.js
import { getTopMv } from '../../services/modules/top-mv'

Page({
  data:{
    videoList: [],
    offset: 0,
    hasMore: true,
  },
  handlePushPage(e){
    const item = e.currentTarget.dataset.itemm
    wx.navigateTo({
      url: `/pages/detail-video/detail-video?id=${item.id}`,
    })
  },
  onLoad(){
    getTopMv().then(res => {
        this.setData({
            videoList: res.data,
            offset: this.data.offset + 20,
            hasMore: res.hasMore
        })
    })
  },
  onReachBottom(){
    console.log('触底');
    getTopMv(this.data.offset).then(res => {
        if (!this.data.hasMore) return
        const result = res.data
        const newArr = [...this.data.videoList,...res.data]
        this.setData({
            videoList: newArr,
            offset: this.data.offset + 20,
            hasMore: res.hasMore
        })
    })
  },
  onPullDownRefresh(){
    this.setData({
        videoList: [],
        offset: 0,
        hasMore: true
    })
    getTopMv().then(res => {
        this.setData({
            videoList: res.data,
            offset: this.data.offset + 20,
            hasMore: res.hasMore
        })
        wx.stopPullDownRefresh()
    })
  }
})