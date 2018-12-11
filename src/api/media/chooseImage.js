/**
 * 拍照或从手机相册中选择图片
 */
const chooseImage = (param, platform = 'wechat') => {
    if (platform == 'wechat') {
        return wx.chooseImage(param);
    }
    if (platform == 'swan') {
        return swan.chooseImage(param);
    }
    if (platform == 'alipay') {
        return my.chooseImage(param);
    }
};

export default chooseImage