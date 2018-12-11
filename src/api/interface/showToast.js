const showToast = (param, platform = 'wechat') => {
    (platform == 'wechat') && wx.showToast(param);
    (platform == 'swan') && swan.showToast(param);
    (platform == 'alipay') && my.showToast(param);
};

export {showToast}