const request = (param, platform = 'wechat') => {
    (platform == 'wechat') && wx.request(param);
    (platform == 'swan') && swan.request(param);
    (platform == 'alipay') && my.request(param);
};

export {request}