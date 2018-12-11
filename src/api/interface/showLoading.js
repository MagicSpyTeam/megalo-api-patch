import {dealObjectValue} from '../../utils';

/**
 * 显示加载提示
 *
 * 1. 支付宝小程序的 标题属性为 content, 另外两个小程序为 title
 * 2. 支付宝小程序 多一个 delay 字段, 用于 延迟显示
 * 3. 支付宝小程序 少一个 mask 字段, 无法控制是否显示蒙层
 */
const showLoading = ({title, mask, delay, success, fail, complete}, platform = 'wechat') => {
    if (platform == 'wechat') {
        return wx.showLoading(dealObjectValue({
            title,
            mask,
            success,
            fail,
            complete
        }));
    }

    if (platform == 'swan') {
        return swan.showLoading(dealObjectValue({
            title,
            mask,
            success,
            fail,
            complete
        }));
    }

    if (platform == 'alipay') {
        return my.showLoading(dealObjectValue({
            content: title,
            delay,
            success,
            fail,
            complete
        }));
    }

};

export default showLoading;