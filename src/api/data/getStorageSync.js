/**
 * getStorage 的同步版本
 */
const getStorageSync = (param, platform = 'wechat') => {
    if (platform == 'wechat') {
        return wx.getStorageSync(param);
    }
    if (platform == 'swan') {
        return swan.getStorageSync(param);
    }
    if (platform == 'alipay') {
        return my.getStorageSync(param);
    }
};

export default getStorageSync;