import {dealObjectValue} from '../../utils';

const setNavigationBarTitle = ({title, success, fail, complete}, platform = 'wechat') => {

    if (platform == 'wechat') {
        return wx.setNavigationBarTitle(dealObjectValue({
            title,
            success,
            fail,
            complete
        }));
    }

    if (platform == 'swan') {
        return swan.setNavigationBarTitle(dealObjectValue({
            title,
            success,
            fail,
            complete
        }));
    }

    if (platform == 'alipay') {
        return my.setNavigationBar(dealObjectValue({
            title,
            success,
            fail,
            complete
        }));
    }
};

export default setNavigationBarTitle