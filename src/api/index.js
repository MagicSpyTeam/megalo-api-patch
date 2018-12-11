import data from './data';

import inter from './interface';
import location from './location';
import media from './media';
import net from './net';

const apiMixin = {};
const platform = "wechat";

const apiMixinFun = (platform) => {

    const apiObj = Object.assign({}, data, location, net, inter, media);

    Object.keys(apiObj).forEach((key) => {
        apiMixin[key] = (...param) => apiObj[key](...param, platform);
    });

    return apiMixin;
};

export default apiMixinFun;