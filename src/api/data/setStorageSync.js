/**
 * setStorage 的同步版本
 */
const setStorageSync = (param, platform = 'wechat') => {
    if (platform == 'wechat') {
        return wx.setStorageSync(param);
    }
    if (platform == 'swan') {
        return swan.setStorageSync(param);
    }
    if (platform == 'alipay') {
        return my.setStorageSync(param);
    }
};

export default setStorageSync;