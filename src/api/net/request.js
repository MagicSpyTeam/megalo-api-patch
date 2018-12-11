/**
 * 向指定服务器发起一个跨域 http 请求
 *
 * 1. 支付宝小程序接口名为 httpRequest, 另外两个小程序为 request
 */
const request = (param, platform = 'wechat') => {
    if (platform == 'wechat') {
        return wx.request(param);
    }
    if (platform == 'swan') {
        return swan.request(param);
    }
    if (platform == 'alipay') {
        return my.httpRequest(param);
    }
};

export default request;