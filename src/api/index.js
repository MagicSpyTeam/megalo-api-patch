import net from './net';

const apiMixin = {};
const platform = "wechat";

const apiMixinFun = (platform) => {

    Object.keys(net).forEach((key) => {
        apiMixin[key] = (...param) => net[key](...param, platform);
    });

    return apiMixin;
};

export default apiMixinFun;