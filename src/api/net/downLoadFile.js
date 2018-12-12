import {dealObjectValue} from '../../utils';

/**
 * 下载文件资源到本地
 *
 * 1. 微信 多一个 filePath 字段, 用来 指定文件下载后存储的路径
 * 2. 支付宝 返回字段为 apFilePath，其他两个为 tempFilePath
 * 3. 支付宝 少返回一个 statusCode 字段
 */
const downloadFile = ({url, header, filePath, success, fail, complete}, platform = 'wechat') => {
    if (platform == 'wechat') {
        return wx.downloadFile(dealObjectValue({
            url,
            header,
            filePath,
            success,
            fail,
            complete
        }));
    }
    if (platform == 'swan') {
        return swan.downloadFile(dealObjectValue({
            url,
            header,
            success,
            fail,
            complete
        }));
    }
    if (platform == 'alipay') {
        return my.downloadFile(dealObjectValue({
            url,
            header,
            success: ({apFilePath}) => {
                success(dealObjectValue({tempFilePath: apFilePath}));
            },
            fail,
            complete
        }));
    }
};

export default downloadFile;