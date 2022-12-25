// pages/detail-video/detail-video.js
Page({
    data: {
        id: 0
    },
    onLoad(option){
        this.setData({
            id: option.id
        })
    }
})