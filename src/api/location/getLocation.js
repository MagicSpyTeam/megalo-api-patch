import {dealObjectValue} from '../../utils';

/**
 * 获取当前的地理位置、速度
 *
 * 1. 支付宝小程序 多 cacheTimeout 参数, 表示 缓存过期时间
 * 2. 支付宝小程序 的 type 参数和 另外两个小程序表示的含义不同，故增加一个 支付宝小程序特有参数 aliType
 * 3. 支付宝小程序 没有 altitude 参数
 */
const getLocation = ({cacheTimeout, aliType, type, altitude, success, fail, complete}, platform = 'wechat') => {
    if (platform == 'wechat') {
        return wx.getLocation(dealObjectValue({
            type,
            altitude,
            success,
            fail,
            complete
        }));
    }
    if (platform == 'swan') {
        return swan.getLocation(dealObjectValue({
            type,
            altitude,
            success,
            fail,
            complete
        }));
    }
    if (platform == 'alipay') {
        return my.getLocation(dealObjectValue({
            cacheTimeout,
            type: aliType,
            success,
            fail,
            complete
        }));
    }
};

export default getLocation;