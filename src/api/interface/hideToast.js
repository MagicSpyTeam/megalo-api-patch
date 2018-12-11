/**
 * 隐藏弱提示
 */
const hideToast = (platform = 'wechat') => {
    if (platform == 'wechat') {
        return wx.hideToast();
    }
    if (platform == 'swan') {
        return swan.hideToast();
    }
    if (platform == 'alipay') {
        return my.hideToast();
    }
};

export default hideToast;