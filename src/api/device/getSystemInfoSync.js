/**
 * 获取系统信息同步接口
 */
const getSystemInfoSync = (param, platform = 'wechat') => {
    if (platform == 'wechat') {
        return wx.getSystemInfoSync(param);
    }
    if (platform == 'swan') {
        return swan.getSystemInfoSync(param);
    }
    if (platform == 'alipay') {
        return my.getSystemInfoSync(param);
    }
};

export default getSystemInfoSync