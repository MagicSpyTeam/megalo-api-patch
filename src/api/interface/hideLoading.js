const hideLoading = (page, platform = 'wechat') => {
    (platform == 'wechat') && wx.hideLoading();
    (platform == 'swan') && swan.hideLoading();
    (platform == 'alipay') && my.hideLoading(page);
};

export {hideLoading}