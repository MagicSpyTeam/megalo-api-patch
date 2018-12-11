/**
 * 清理本地数据缓存
 */
const clearStorage = (param, platform = 'wechat') => {
    if (platform == 'wechat') {
        return wx.clearStorage(param);
    }
    if (platform == 'swan') {
        return swan.clearStorage(param);
    }
    if (platform == 'alipay') {
        return my.clearStorage(param);
    }
};

export default clearStorage;