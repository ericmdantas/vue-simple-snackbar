import VueSnackbar, {snackbar} from './snackbar.vue'

export default {
    install(Vue) {
        Vue.prototype.$snackbar = {
            show(opts) {
                snackbar.show(opts)
            },
            hide() {
                snackbar.hide()
            }
        }

        Vue.component(VueSnackbar.name, VueSnackbar)
    }
}