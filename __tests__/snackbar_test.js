import {createLocalVue} from '@vue/test-utils'
import VueSnackbar from '../src/index'

describe("snackbar", () => {
    describe("install", () => {
        it("should create the methods correctly", () => {
            const localVue = createLocalVue()

            localVue.use(VueSnackbar)

            expect(localVue.prototype.$snackbar).toBeDefined()
            expect(typeof localVue.prototype.$snackbar.show).toBe('function')
            expect(typeof localVue.prototype.$snackbar.hide).toBe('function')
        })
    })
})