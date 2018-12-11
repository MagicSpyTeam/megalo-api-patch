const showLoading = (param, platform = 'wechat') => {
    (platform == 'wechat') && wx.showLoading(param);
    (platform == 'swan') && swan.showLoading(param);
    (platform == 'alipay') && my.showLoading(param);
};

export {showLoading}