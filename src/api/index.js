import net from './net';
import inter from './interface';

const apiMixin = {};
const platform = "wechat";

const apiMixinFun = (platform) => {

    const apiObj = Object.assign({}, net, inter);

    Object.keys(apiObj).forEach((key) => {
        apiMixin[key] = (...param) => apiObj[key](...param, platform);
    });

    return apiMixin;
};

export default apiMixinFun;