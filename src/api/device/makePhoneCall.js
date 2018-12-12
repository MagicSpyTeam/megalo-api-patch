import {dealObjectValue} from '../../utils';

/**
 * 拨打电话
 *
 * 1. 支付宝小程序 无回调属性，无法实现 相关回调
 * 2. 支付宝小程序 电话号码字段名为 number, 另外两个小程序为 phoneNumber
 */
const makePhoneCall = ({phoneNumber, success, fail, complete}, platform = 'wechat') => {
    if (platform == 'wechat') {
        return wx.makePhoneCall(dealObjectValue({
            phoneNumber,
            success,
            fail,
            complete
        }));
    }
    if (platform == 'swan') {
        return swan.makePhoneCall(dealObjectValue({
            phoneNumber,
            success,
            fail,
            complete
        }));
    }
    if (platform == 'alipay') {
        return my.makePhoneCall(dealObjectValue({
            number: phoneNumber
        }));
    }
};

export default makePhoneCall;