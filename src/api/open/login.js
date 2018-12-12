import {dealObjectValue} from '../../utils';


const login = ({timeout, scopes, success, fail, complete}, platform = 'wechat') => {

    if (platform == 'wechat') {
        return wx.login(dealObjectValue({
            timeout,
            success,
            fail,
            complete
        }));
    }

    if (platform == 'swan') {
        return swan.login(dealObjectValue({
            timeout,
            success,
            fail,
            complete
        }));
    }

    if (platform == 'alipay') {
        return my.getAuthCode(dealObjectValue({
            scopes,
            success,
            fail,
            complete
        }));
    }
};

export default login;