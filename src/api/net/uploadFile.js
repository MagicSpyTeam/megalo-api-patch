import {dealObjectValue} from '../../utils';

/**
 * 上传本地资源到开发者服务器
 *
 * 1. 支付宝小程序 比 微信小程序和百度小程序 多一个 fileType 字段
 * 2. 支付宝小程序 的文件名字段为 fileName, 另外两个小程序为 name
 *
 */
const uploadFile = ({url, filePath, name, fileType, header, formData, success, fail, complete}, platform = 'wechat') => {
    if (platform == 'wechat') {
        return wx.uploadFile(dealObjectValue({
            url,
            filePath,
            name,
            header,
            formData,
            success,
            fail,
            complete
        }));
    }

    if (platform == 'swan') {
        return swan.uploadFile(dealObjectValue({
            url,
            filePath,
            name,
            header,
            formData,
            success,
            fail,
            complete
        }));
    }

    if (platform == 'alipay') {
        return my.uploadFile(dealObjectValue({
            url,
            filePath,
            fileName: name,
            fileType,
            header,
            formData,
            success,
            fail,
            complete
        }));
    }
};

export default uploadFile;