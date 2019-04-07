import Vue from 'vue'
import {createLocalVue} from '@vue/test-utils'
import VueSnackbarIndex from '../src/index'
import VueSnackbarVue, {snackbar} from '../src/snackbar.vue'

describe("snackbar", () => {
    describe("external", () => {
        describe("install", () => {
            it("should create the methods correctly", () => {
                const localVue = createLocalVue()

                localVue.use(VueSnackbarIndex)

                expect(localVue.prototype.$snackbar).toBeDefined()
                expect(typeof localVue.prototype.$snackbar.show).toBe('function')
                expect(typeof localVue.prototype.$snackbar.hide).toBe('function')
            })
        })
    })

    describe("internal", () => {
        describe("creation", () => {
            it("should have the right name", () => {
                expect(VueSnackbarVue.name).toBe('Snackbar')
            })

            it("should have the right data()", () => {
                const vm = new Vue(VueSnackbarVue).$mount()

                expect(vm.cfgSnackbar).toEqual({
                    message: '',
                    visible: false,
                    primaryAction: {
                        description: '',
                        action: expect.any(Function),
                    },
                })
            })
        })

        describe("methods", () => {
            describe("hide", () => {
                it("should set the cfgSnackbar visible to false", () => {
                    const vm = new Vue(VueSnackbarVue).$mount()

                    expect(vm.cfgSnackbar.visible).toBe(false)

                    vm.cfgSnackbar.visible = true

                    vm.hide()

                    expect(vm.cfgSnackbar.visible).toBe(false)
                })
            })
        })

        describe("mounted", () => {
            describe("show", () => {
                it("should show the cfgSnackbar correcly", () => {
                    const vm = new Vue(VueSnackbarVue).$mount()

                    snackbar.show({
                        message: 'abc',
                        primaryAction: {
                            description: 'x',
                            action: () => {},
                        }
                    })

                    expect(vm.cfgSnackbar).toEqual({
                        message: 'abc',
                        visible: true,
                        primaryAction: {
                            description: 'x',
                            action: expect.any(Function),
                        },                       
                    })
                })
            })
        })
    })
})