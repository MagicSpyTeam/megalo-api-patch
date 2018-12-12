import {dealObjectValue} from '../../utils';

/**
 * 拍照或从手机相册中选择图片
 */
const chooseImage = ({count, sizeType, sourceType, success, fail, complete}, platform = 'wechat') => {
    if (platform == 'wechat') {
        return wx.chooseImage(dealObjectValue({
            count,
            sizeType,
            sourceType,
            success,
            fail,
            complete
        }));
    }
    if (platform == 'swan') {
        return swan.chooseImage(dealObjectValue({
            count,
            sizeType,
            sourceType,
            success,
            fail,
            complete
        }));
    }
    if (platform == 'alipay') {
        return my.chooseImage(dealObjectValue({
            count,
            sizeType,
            sourceType,
            success: ({apFilePaths}) => {
                success(dealObjectValue({tempFilePaths: apFilePaths}));
            },
            fail,
            complete
        }));
    }
};

export default chooseImage