const hideToast = (param, platform = 'wechat') => {
    (platform == 'wechat') && wx.hideToast(param);
    (platform == 'swan') && swan.hideToast(param);
    (platform == 'alipay') && my.hideToast(param);
};

export {hideToast}