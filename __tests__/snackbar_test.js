import Vue from 'vue'
import {createLocalVue} from '@vue/test-utils'
import VueSimpleSnackbarIndex from '../src/index'
import VueSimpleSnackbarVue, {snackbar} from '../src/snackbar.vue'

describe("snackbar", () => {
    describe("external", () => {
        describe("install", () => {
            it("should create the methods correctly", () => {
                const localVue = createLocalVue()

                localVue.use(VueSimpleSnackbarIndex)

                expect(localVue.prototype.$simpleSnackbar).toBeDefined()
                expect(typeof localVue.prototype.$simpleSnackbar.show).toBe('function')
                expect(typeof localVue.prototype.$simpleSnackbar.hide).toBe('function')
            })
        })
    })

    describe("internal", () => {
        describe("creation", () => {
            it("should have the right name", () => {
                expect(VueSimpleSnackbarVue.name).toBe('SimpleSnackbar')
            })

            it("should have the right data()", () => {
                const vm = new Vue(VueSimpleSnackbarVue).$mount()

                const TIME_TO_HIDE_DEFAULT = 30000

                expect(vm.cfgSnackbar).toEqual({
                    message: '',
                    visible: false,
                    timeToHide: TIME_TO_HIDE_DEFAULT,
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
                    const vm = new Vue(VueSimpleSnackbarVue).$mount()

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
                    const vm = new Vue(VueSimpleSnackbarVue).$mount()

                    snackbar.show({
                        message: 'abc',
                        timeToHide: 10000,
                        primaryAction: {
                            description: 'x',
                            action: () => {},
                        }
                    })

                    expect(vm.cfgSnackbar).toEqual({
                        message: 'abc',
                        visible: true,
                        timeToHide: 10000,
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