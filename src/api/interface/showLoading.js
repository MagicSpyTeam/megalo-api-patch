const showLoading = ({title, mask, delay, success, fail, complete}, platform = 'wechat') => {
    (platform == 'wechat') && wx.showLoading({title, mask, success, fail, complete});
    (platform == 'swan') && swan.showLoading({title, mask, success, fail, complete});
    (platform == 'alipay') && my.showLoading({content: title, delay, success, fail, complete});
};

export {showLoading}