/**
 * 异步获取当前storage的相关信息
 */
const getStorageInfo = (param, platform = 'wechat') => {
    if (platform == 'wechat') {
        return wx.getStorageInfo(param);
    }
    if (platform == 'swan') {
        return swan.getStorageInfo(param);
    }
    if (platform == 'alipay') {
        return my.getStorageInfo(param);
    }
};

export default getStorageInfo;