//返回promise函数
//登录
function login () {
  return window.EWebBridge.webCallAppInJs('login')
}
//登出
function logout () {
  return window.EWebBridge.webCallAppInJs('logout')
}
//获取token
function getToken () {
  return window.EWebBridge.webCallAppInJs('getToken')
}
//路由跳转
/**
 * 具体请查看app交互文档
 * @param {
 * //可选值
 * h5,//普通H5
 * final_h5,//没有返回，右上角完成的H5
 * full_h5,//全屏H5
 * home,//首页
 * mid,//中间tabbar页
 * mine,//我的
 * scan//扫码
 * } flag
 * @param {
 * url,//页面地址
 * login,//是否需要登录
 * needRefresh,//返回到这个页面时，1:需要刷新
 * needPartRefresh,//返回到这个页面时，1:需要执行trigger：part_reload
 * pullRefresh,//当前页面，1:需要开启下拉刷新
 * backToFirst,//当前页面，1:点击左上角，返回到入口第一个webview
 * forbidSwipeBack,//当前页面，1:禁止右滑返回
 * title,//	不传取页面title
 * } extra
 */
function bridge (flag, extra = {}) {
  return window.EWebBridge.webCallAppInJs('bridge', {
    'flag': flag,
    'extra': extra
  })
}
/**
 * 页面返回
 * @param {
 * //可选值
 * 0：否，1：是
 * } refresh 
 * @param {回退页面数,不传默认回退1级} index
 */
function goBack (refresh, index) {
  return window.EWebBridge.webCallAppInJs('goBack', {
    'refresh': refresh,
    'index': index
  })
}
//右上角按钮组
//数组
//从右往左排列
/**
 * 使用时直接调用setRightButton.then(res=(){//按钮点击后触发})表示点击的按钮索引
 * route参数参见路由跳转参数说明
 * @param {{
"img":"右上角图标url",
"title":"设置",
"subBtns":[
{"img":"图片url",
"title":"按钮1",
"route":"{ \"flag\" : \"h5\" , \"extra\" : {\"url\":\"https:\/\/www.juejin.im\"} }"},
{"img":"图片url",
"title":"按钮2",
"route":"{ \"flag\" : \"h5\" , \"extra\" : {\"url\":\"https:\/\/www.baidu.com\"} }"}
]

}} btns
 */
function setSetButtons ({ img, title, subBtns = [] }) {
  return window.EWebBridge.webCallAppInJs('webview_set_button', {
    img,
    title,
    subBtns
  })
}
//右上角按钮的设置
/**
 *route参数参见路由跳转参数说明
 setRightButton.then(()=>{//按钮点击后触发})
 * @param {
  'img':'图片url',
  'title':'按钮文案'
   "route":"{ "flag" : "" , "extra" : {} }"
}
 */
function setRightButton ({ img, title, route }) {
  return window.EWebBridge.webCallAppInJs('webview_right_button', {
    img, title, route
  })
}
//左上角按钮的设置
/**
 *setLeftButton.then(()=>{//按钮点击后触发})
 * @param {
  'img':'图片url',
  'title':'按钮文案'
   "intercept":"1"   //是否拦截原生返回事件 1是 其他否
} btn
 */
function setLeftButton ({ img, title, intercept }) {
  return window.EWebBridge.webCallAppInJs('webview_left_button', {
    img, title, intercept
  })
}
//导航栏颜色
/**
 * @param {*} barColor 
 * @param {*} titleColor 
 */
function setNavigationColor (barColor, titleColor) {
  return window.EWebBridge.webCallAppInJs('navigation_color', {
    'bar_color': barColor,
    'title_color': titleColor
  })
}
//调用手机系统功能
/**
 * 
 * @param {//tel: 打电话，sms: 发短信} system
 * @param {手机号} number 
 */
function callSystem (system, number) {
  return window.EWebBridge.webCallAppInJs('callSystem', {
    'system': system, //tel: 打电话，sms: 发短信
    'number': number
  })
}
//埋点统计
/**
 * 
 * @param {*} event 事件名称
 * @param {*} label 事件标签
 * @param {* url,//页面地址
 * login,//是否需要登录
 * needRefresh,//返回到这个页面时，1:需要刷新
 * needPartRefresh,//返回到这个页面时，1:需要执行trigger：part_reload
 * pullRefresh,//当前页面，1:需要开启下拉刷新
 * backToFirst,//当前页面，1:点击左上角，返回到入口第一个webview
 * forbidSwipeBack,//当前页面，1:禁止右滑返回
 * title,//	不传取页面title
 * } extra
 */
function track (event, label, extra = {}) {
  return window.EWebBridge.webCallAppInJs('track', {
    'event': event,
    'label': label,
    'extra': extra
  })
}
//iOS 应用内评价
function appstoreRating () {
  return window.EWebBridge.webCallAppInJs('appstore_rating')
}
//检查app版本更新
function appupdate () {
  return window.EWebBridge.webCallAppInJs('app_update')
}
//获取当前位置
function getLocation () {
  return window.EWebBridge.webCallAppInJs('getLocation')
}
//更新当前位置
function refreshLocation () {
  return window.EWebBridge.webCallAppInJs('refreshLocation')
}
//分享
/**
 * 
 * @param {*分享标题} title
 * @param {*分享内容} content
 * @param {*分享连接} url
 * @param {*小图} img
 * @param {*分享类型：链接0，图片1} shareType
 * @param {*分享图片} base64
 */
function share ({ title, content, url, img, shareType, base64 }) {
  return window.EWebBridge.webCallAppInJs('share', {
    'title': title,
    'content': content,
    'url': url,
    'img': img,
    'shareType': shareType,
    'base64': base64
  })
}
//提示框
/**
 * 
 * @param {*内容} content 
 */
function toast (content) {
  return window.EWebBridge.webCallAppInJs('webview_toast', { 'content': content })
}
export default {
  login,
  logout,
  getToken,
  bridge,
  goBack,
  setSetButtons,
  setRightButton,
  setLeftButton,
  setNavigationColor,
  callSystem,
  track,
  appstoreRating,
  appupdate,
  getLocation,
  refreshLocation,
  share,
  toast
}