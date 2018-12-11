const showModal = (param, platform = 'wechat') => {
    (platform == 'wechat') && wx.showModal(param);
    (platform == 'swan') && swan.showModal(param);
    (platform == 'alipay') && my.showModal(param);
};

export {showModal}