/**
 * 存储数据
 */
const setStorage = (param, platform = 'wechat') => {
    if (platform == 'wechat') {
        return wx.setStorage(param);
    }
    if (platform == 'swan') {
        return swan.setStorage(param);
    }
    if (platform == 'alipay') {
        return my.setStorage(param);
    }
};

export default setStorage;