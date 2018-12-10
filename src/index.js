import apiMixin from './api';

let _Vue;

const routerPatch = {
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
            onShow() {
                handleMixin(this);
            },
            created() {
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


export default routerPatch;
