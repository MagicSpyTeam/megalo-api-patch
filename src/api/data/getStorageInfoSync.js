/**
 * getStorageInfo 的同步版本
 */
const getStorageInfoSync = (platform = 'wechat') => {
    if (platform == 'wechat') {
        return wx.getStorageInfoSync();
    }
    if (platform == 'swan') {
        return swan.getStorageInfoSync();
    }
    if (platform == 'alipay') {
        return my.getStorageInfoSync();
    }
};

export default getStorageInfoSync;