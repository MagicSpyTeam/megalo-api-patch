/**
 * removeStorage 的同步版本
 */
const removeStorageSync = (param, platform = 'wechat') => {
    if (platform == 'wechat') {
        return wx.removeStorageSync(param);
    }
    if (platform == 'swan') {
        return swan.removeStorageSync(param);
    }
    if (platform == 'alipay') {
        return my.removeStorageSync(param);
    }
};

export default removeStorageSync;