const showToast = ({title, type, icon, image, duration, success, fail, complete, mask}, platform = 'wechat') => {
    (platform == 'wechat') && wx.showToast({
        title, icon, image, duration, success, fail, complete, mask
    });
    (platform == 'swan') && swan.showToast({
        title, icon, image, duration, success, fail, complete, mask
    });
    (platform == 'alipay') && my.showToast({
        content: title, type, duration, success, fail, complete
    });
};

export {showToast}