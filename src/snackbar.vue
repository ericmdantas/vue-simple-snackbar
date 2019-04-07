<template>
    <div class="snackbar" :class="{'hidden': !cfgSnackbar.visible, 'snackbar-with-action': cfgSnackbar.primaryAction.description}">
        <div class="snackbar-description-container">
            <p class="snackbar-description" v-html="cfgSnackbar.message"></p>
        </div>

        <div class="snackbar-action-container" v-show="cfgSnackbar.primaryAction.description">
            <button type="button"   
                    class="btn btn-primary"
                    @click="cfgSnackbar.primaryAction.action()">
                <span>{{cfgSnackbar.primaryAction.description}}</span>
            </button>
        </div>
    </div>
</template>

<script>
import {Bus} from 'ubus'
const ubus = new Bus()
const busEvents = {
    SHOW: 'snackbar.show',
    HIDE: 'snackbar.hide',
}

export const snackbar = {
    show(cfg) {
        if (!cfg) {
            return
        }

        Object.assign(cfg, {visible: true})

        if (!cfg.primaryAction) {
            cfg.primaryAction = {
                description: '',
                action: () => {},
            }            
        }

        ubus.emit(busEvents.SHOW, cfg)
    },
    hide() {
        ubus.emit(busEvents.HIDE)
    },
}
export default {
    name: 'Snackbar',
    data() {
        return {
            cfgSnackbar: {
                message: '',
                visible: false,
                primaryAction: {
                    description: '',
                    action: () => {},
                },
            },
        }
    },
    methods: {        
        hide() {
            this.cfgSnackbar.visible = false
        },
    },
    mounted() {
        ubus.on(busEvents.SHOW, (cfg) => {
            Object.assign(this.cfgSnackbar, cfg)
        })

        ubus.on(busEvents.HIDE, () => {
            this.cfgSnackbar.visible = false
        })
    },
}
</script>

<style lang="scss" scoped>
$default-spacing: 15px;
$default-border-radius: 4px;
$width-medium-device: 768px;

.snackbar {
    position: fixed;
    left: $default-spacing;
    right: $default-spacing;
    bottom: 15px;
    width: calc(100% - 30px);
    background-color: #323232;
    border-radius: $default-border-radius;
    transition: bottom .3s ease;
    will-change: bottom;
    z-index: 1;

    &.hidden {
        bottom: -999px;
    }

    &.snackbar-has-action .snackbar-description-container {
        padding: $default-spacing $default-spacing 0 $default-spacing;
    }

    .snackbar-description-container {
        float: left;
        padding: $default-spacing;

        .snackbar-description {
            color: #e0e0e0;
            margin-bottom: 0;
        }

        @media(min-width: $width-medium-device) {
            padding: $default-spacing;
        }
    }

    .snackbar-action-container {
        float: right;
        padding-top: 8px;
        padding-bottom: 8px;

        .btn.btn-primary {
            background-color: transparent;
            color: #ff6e39;
            box-shadow: none;
            border-width: 0;
        }
    }

    @media(min-width: $width-medium-device) {
        max-width: 500px;
    }
}
</style>
