import {dealObjectValue} from '../../utils';

/**
 * 滚动到页面的目标位置
 *
 * 1. 支付宝小程序仅有 scrollTop 属性，无法实现自定义动画长度以及相关回调
 */
const pageScrollTo = ({scrollTop, duration, success, fail, complete}, platform = 'wechat') => {
    if (platform == 'wechat') {
        return wx.pageScrollTo(dealObjectValue({
            scrollTop,
            duration,
            success,
            fail,
            complete
        }));
    }
    if (platform == 'swan') {
        return swan.pageScrollTo(dealObjectValue({
            scrollTop,
            duration,
            success,
            fail,
            complete
        }));
    }
    if (platform == 'alipay') {
        return my.pageScrollTo(dealObjectValue({
            scrollTop
        }));
    }
};

export default pageScrollTo;