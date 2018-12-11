/**
 * 从本地缓存中移除指定 key
 */
const removeStorage = (param, platform = 'wechat') => {
    if (platform == 'wechat') {
        return wx.removeStorage(param);
    }
    if (platform == 'swan') {
        return swan.removeStorage(param);
    }
    if (platform == 'alipay') {
        return my.removeStorage(param);
    }
};

export default removeStorage;