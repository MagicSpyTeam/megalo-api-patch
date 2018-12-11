import {dealObjectValue} from '../../utils';

/**
 * 显示模态对话框
 *
 * 1. 支付宝小程序 接口名称为 confirm, 另外两个小程序为 showModal
 * 2. 支付宝小程序 缺少 cancelColor/confirmColor/showCancel 字段, 无法控制文字颜色/取消按钮是否显示
 * 3. 支付宝小程序 确定按钮和取消按钮文字 字段为 confirmButtonText/cancelButtonText 另外两个小程序为 confirmText/cancelText
 */
const showModal = ({title, content, showCancel, cancelText, cancelColor, confirmText, confirmColor, success, fail, complete}, platform = 'wechat') => {
    if (platform == 'wechat') {
        return wx.showModal(dealObjectValue({
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
        }));
    }

    if (platform == 'swan') {
        return swan.showModal(dealObjectValue({
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
        }));
    }

    if (platform == 'alipay') {
        return my.confirm(dealObjectValue({
            title,
            content,
            confirmButtonText: confirmText,
            cancelButtonText: cancelText,
            success,
            fail,
            complete
        }));
    }
};

export default showModal;