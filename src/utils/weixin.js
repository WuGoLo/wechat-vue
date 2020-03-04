import wx from 'weixin-js-sdk'
import store from '@/store'
import {
  validator
} from '@/utils/common'
import $customer from '@/api/customer'
const agent = navigator.userAgent
const isiOS = !!agent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
let wxSignParams = {
  signUrl:  store.getters.getOriginUrl?store.getters.getOriginUrl:window.location.href,
  timestamp: null,
  nonceStr: null,
  signature: null,
  errorCount: 3
}

function init (params) {
    // console.log('===shareUrl==='+shareUrl)
    $customer.chImg({
      shareUrl: isiOS?wxSignParams.signUrl:params.shareUrl
    }).then((res) => {
      wxSignParams.timestamp = res.timestamp
      wxSignParams.nonceStr = res.nonceStr
      wxSignParams.signature = res.signature
      wxConfig(params)
    })
}

function wxConfig (params) {
  //  console.log('==='+JSON.stringify(params))
  //  console.log('===--------'+JSON.stringify(wxSignParams))
  wx.config({
    debug: false,
    appId: store.getters.getThirdAppId,
    timestamp: wxSignParams.timestamp,
    nonceStr: wxSignParams.nonceStr,
    signature: wxSignParams.signature,
    jsApiList: params.apiList
  })
  wx.error((res) => {
    console.log(res)
    if (wxSignParams.errorCount >= 0) {
      wxSignParams.errorCount = wxSignParams.errorCount - 1
      wxSignParams.signUrl =  isiOS ? wxSignParams.signUrl : window.location.href
      init(params)
    }
  })
}
function pay (params) {
  new Promise((resolve) => {
    wx.chooseWXPay({
      timestamp: store.getters.getTimestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
      nonceStr: store.getters.getNonceStr, // 支付签名随机串，不长于 32 位
      package: 'prepay_id=' + params.prepayId, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
      signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
      paySign: params.paySign, // 支付签名

      success: function (res) {
        resolve({ 'success': res })
      },
      cancel: function (res) {
        resolve('cancel', res)
      },
      fail: function (res) {
        resolve('fail', res)
      }
    })
  })
}
function share (params) {
  wx.ready(() => {
    store.dispatch('setSignInfo', wxSignParams.timestamp, wxSignParams.nonceStr, wxSignParams.signature)
    wx.updateTimelineShareData({
      title: params.title, // 分享标题
      desc: params.desc, // 分享描述
      link: params.linkUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: params.imgUrl, // 分享图标
      success: function () {
        // 设置成功
      }
    })
    
    wx.updateAppMessageShareData({
      title: params.title, // 分享标题
      desc: params.desc, // 分享描述
      link: params.linkUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: params.imgUrl, // 分享图标
      success: function () {
        // 设置成功
      }
    })
  })
 
}
function shareAppMessage (params) {
  wx.onMenuShareAppMessage({
    title: params.title,
    desc: params.desc,
    link: params.linkUrl,
    imgUrl: params.imgUrl,

    trigger: function (res) {
      console.log(res)
    },
    success: function (res) {
      console.log(res)
    },
    cancel: function (res) {
      console.log(res)
    },
    fail: function (res) {
      console.log(res)
    }
  })
}
function shareTimeline (params) {
  wx.onMenuShareTimeline({
    title: params.title,
    link: params.linkUrl,
    imgUrl: params.imgUrl,

    trigger: function (res) {
      console.log(res)
    },
    success: function (res) {
      console.log(res)
    },
    cancel: function (res) {
      console.log(res)
    },
    fail: function (res) {
      console.log(res)
    }
  })
}
function updateTimelineShareData (params) {
  wx.updateTimelineShareData({
    title: params.title, // 分享标题
    link: params.linkUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl: params.imgUrl, // 分享图标
    success: function () {
      // 设置成功
    }
  })
}
function updateAppMessageShareData (params) {
  wx.updateAppMessageShareData({
    title: params.title, // 分享标题
    desc: params.desc, // 分享描述
    link: params.linkUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl: params.imgUrl, // 分享图标
    success: function () {
      // 设置成功
    }
  })
}
export default {
  init,
  //微信支付
  pay,
  //微信分享
  share,
  //分享给朋友
  shareAppMessage,
  //分享到朋友圈
  shareTimeline,
  //自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容
  updateTimelineShareData,
  //自定义“分享给朋友”及“分享到QQ”按钮的分享内容
  updateAppMessageShareData
}