/**
 * 创建并返回 camera 上下文
 *
 * 1. 支付宝小程序 不支持此接口
 */
const createCameraContext = (platform = 'wechat') => {
    if (platform == 'wechat') {
        return wx.createCameraContext();
    }
    if (platform == 'swan') {
        return swan.createCameraContext();
    }
};

export default createCameraContext;