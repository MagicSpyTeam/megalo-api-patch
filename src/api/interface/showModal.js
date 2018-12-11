const showModal = ({title, content, showCancel, cancelText, cancelColor, confirmText, confirmColor, success, fail, complete}, platform = 'wechat') => {
    (platform == 'wechat') && wx.showModal({
        title,
        content,
        showCancel,
        cancelText,
        cancelColor,
        confirmText,
        confirmColor,
        success,
        fail,
        complete
    });
    (platform == 'swan') && swan.showModal({
        title,
        content,
        showCancel,
        cancelText,
        cancelColor,
        confirmText,
        confirmColor,
        success,
        fail,
        complete
    });
    (platform == 'alipay') && my.confirm({
        title,
        content,
        confirmButtonText: confirmText,
        cancelButtonText: cancelText,
        success,
        fail,
        complete
    });
};

export {showModal}