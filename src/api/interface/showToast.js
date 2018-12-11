import {dealObjectValue} from '../../utils';

/**
 * 显示一个弱提示
 *
 * 1. 支付宝小程序 的标题属性为 content, 另外两个小程序为 title
 * 2. 支付宝小程序 少 icon/image/mask 字段, 无法控制图标和蒙层
 */
const showToast = ({title, type, icon, image, duration, success, fail, complete, mask}, platform = 'wechat') => {
    if (platform == 'wechat') {
        return wx.showToast(dealObjectValue({
            title,
            icon,
            image,
            duration,
            success,
            fail,
            complete,
            mask
        }));
    }

    if (platform == 'swan') {
        return swan.showToast(dealObjectValue({
            title,
            icon,
            image,
            duration,
            success,
            fail,
            complete,
            mask
        }));
    }

    if (platform == 'alipay') {
        return my.showToast(dealObjectValue({
            content: title,
            type,
            duration,
            success,
            fail,
            complete
        }));
    }
};

export default showToast;