import {dealObjectValue} from '../../utils';


const getUserInfo = ({withCredentials, success, fail, complete}, platform = 'wechat') => {

    if (platform == 'wechat') {
        return wx.getUserInfo(dealObjectValue({
            withCredentials,
            success,
            fail,
            complete
        }));
    }

    if (platform == 'swan') {
        return swan.getUserInfo(dealObjectValue({
            success,
            fail,
            complete
        }));
    }

    if (platform == 'alipay') {
        return my.getAuthUserInfo(dealObjectValue({
            success,
            fail,
            complete
        }));
    }
};

export default getUserInfo;