import VueSimpleSnackbar, {snackbar} from './snackbar.vue'

export default {
    install(Vue) {
        Vue.prototype.$simpleSnackbar = {
            show(opts) {
                snackbar.show(opts)
            },
            hide() {
                snackbar.hide()
            }
        }

        Vue.component(VueSimpleSnackbar.name, VueSimpleSnackbar)
    }
}