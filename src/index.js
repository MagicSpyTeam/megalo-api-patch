import apiMixin from './api';

let _Vue;

const apiPatch = {
    install(Vue, options) {

        if (this.installed && _Vue === Vue) return;
        this.installed = true;
        _Vue = Vue;

        let _api = {};

        const handleMixin = (that) => {
            if (that.$parent) return;
            const {platform} = that.$root.$mp;
            _api = apiMixin(platform);
        };

        Vue.mixin({
            beforeCreate() {
                handleMixin(this);
            }
        });

        Object.defineProperty(Vue.prototype, '$api', {
            get() {
                return _api;
            }
        });
    }
};


export default apiPatch;
