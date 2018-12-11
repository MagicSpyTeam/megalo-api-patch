const hideLoading = (param, platform = 'wechat') => {
    (platform == 'wechat') && wx.hideLoading(param);
    (platform == 'swan') && swan.hideLoading(param);
    (platform == 'alipay') && my.hideLoading(param);
};

export {hideLoading}