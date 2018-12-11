/**
 * 隐藏加载提示
 *
 * 1. 支付宝小程序 多一个参数为 page, 指明在哪个page执行hideLoading
 */
const hideLoading = ({page}, platform = 'wechat') => {
    if (platform == 'wechat') {
        return wx.hideLoading();
    }
    if (platform == 'swan') {
        return swan.hideLoading();
    }
    if (platform == 'alipay') {
        return my.hideLoading({
            page
        });
    }
};

export default hideLoading;