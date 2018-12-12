import {dealObjectValue} from '../../utils';

/**
 * 向指定服务器发起一个跨域 http 请求
 *
 * 1. 支付宝 接口名为 httpRequest, 另外两个小程序为 request
 * 2. 支付宝 不支持 responseType 参数，多支持一个 timeout参数
 * 3. 支付宝 返回值属性状态码 为 status，另外两个为 statusCode
 */
const request = ({url, data, header, method, timeout, dataType, responseType, success, fail, complete}, platform = 'wechat') => {
    if (platform == 'wechat') {
        return wx.request(dealObjectValue({
            url,
            data,
            header,
            method,
            dataType,
            responseType,
            success,
            fail,
            complete
        }));
    }

    if (platform == 'swan') {
        return swan.request(dealObjectValue({
            url,
            data,
            header,
            method,
            dataType,
            responseType,
            success,
            fail,
            complete
        }));
    }

    if (platform == 'alipay') {
        return my.httpRequest(dealObjectValue({
            url,
            data,
            header,
            method,
            timeout,
            dataType,
            success: ({data, status, headers}) => {
                success(dealObjectValue({data, statusCode: status, headers}));
            },
            fail,
            complete
        }));
    }

};

export default request;