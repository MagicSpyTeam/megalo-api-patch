/**
 * 获取系统信息
 */
const getSystemInfo = (param, platform = 'wechat') => {
    if (platform == 'wechat') {
        return wx.getSystemInfo(param);
    }
    if (platform == 'swan') {
        return swan.getSystemInfo(param);
    }
    if (platform == 'alipay') {
        return my.getSystemInfo(param);
    }
};

export default getSystemInfo