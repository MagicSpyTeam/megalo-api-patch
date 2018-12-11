import {dealObjectValue} from '../../utils';

const setNavigationBarColor = ({frontColor, backgroundColor, animation, success, fail, complete}, platform = 'wechat') => {

    if (platform == 'wechat') {
        return wx.setNavigationBarColor(dealObjectValue({
            frontColor,
            backgroundColor,
            animation,
            success,
            fail,
            complete
        }));
    }

    if (platform == 'swan') {
        return swan.setNavigationBarColor(dealObjectValue({
            frontColor,
            backgroundColor,
            animation,
            success,
            fail,
            complete
        }));
    }

    if (platform == 'alipay') {
        return my.setNavigationBar(dealObjectValue({
            backgroundColor,
            success,
            fail,
            complete
        }));
    }
};

export default setNavigationBarColor