/**
 * clearStorage 的同步版本
 */
const clearStorageSync = (platform = 'wechat') => {
    if (platform == 'wechat') {
        return wx.clearStorageSync();
    }
    if (platform == 'swan') {
        return swan.clearStorageSync();
    }
    if (platform == 'alipay') {
        return my.clearStorageSync();
    }
};

export default clearStorageSync;