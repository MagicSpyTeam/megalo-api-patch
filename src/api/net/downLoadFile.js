import {dealObjectValue} from '../../utils';

/**
 * 下载文件资源到本地
 *
 * 1. 微信小程序 多一个 filePath 字段, 用来 指定文件下载后存储的路径
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
            success,
            fail,
            complete
        }));
    }
};

export default downloadFile;