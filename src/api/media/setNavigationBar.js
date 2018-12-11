import {dealObjectValue} from '../../utils';

const setNavigationBar = ({title, image, backgroundColor, borderBottomColor, frontColor, animation, reset, success, fail, complete}, platform = 'wechat') => {

    if (platform == 'wechat') {
        wx.setNavigationBarColor(dealObjectValue({
            frontColor,
            backgroundColor,
            animation
        }));

        wx.setNavigationBarTitle(dealObjectValue({
            title
        }));
    }

    if (platform == 'swan') {
        swan.setNavigationBarColor(dealObjectValue({
            frontColor,
            backgroundColor,
            animation
        }));

        swan.setNavigationBarTitle(dealObjectValue({
            title
        }));
    }

    if (platform == 'alipay') {
        return my.setNavigationBar(dealObjectValue({
            title,
            image,
            backgroundColor,
            borderBottomColor,
            reset,
            success,
            fail,
            complete
        }));
    }
};

export default setNavigationBar