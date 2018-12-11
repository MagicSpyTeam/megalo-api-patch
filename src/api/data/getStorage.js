/**
 * 存储数据
 */
const getStorage = (param, platform = 'wechat') => {
    if (platform == 'wechat') {
        return wx.getStorage(param);
    }
    if (platform == 'swan') {
        return swan.getStorage(param);
    }
    if (platform == 'alipay') {
        return my.getStorage(param);
    }
};

export default getStorage;