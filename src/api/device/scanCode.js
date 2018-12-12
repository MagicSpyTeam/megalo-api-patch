import {dealObjectValue} from '../../utils';

/**
 * 调起客户端扫码界面
 */
const scanCode = ({onlyFromCamera, scanType, success, fail, complete}, platform = 'wechat') => {
    if (platform == 'wechat') {
        return wx.scanCode(dealObjectValue({
            onlyFromCamera,
            scanType,
            success,
            fail,
            complete
        }));
    }

    if (platform == 'swan') {
        return swan.scanCode(dealObjectValue({
            success,
            fail,
            complete
        }));
    }

    if (platform == 'alipay') {
        if (scanType && scanType.length > 0) {
            const type = (scanType[0] == "barCode" ? "bar" : "qr");
        }

        return my.scan(dealObjectValue({
            type: type,
            hideAlbum: onlyFromCamera,
            success: ({code}) => {
                success(dealObjectValue({
                    result: code
                }));
            },
            fail,
            complete
        }));
    }
};

export default scanCode;