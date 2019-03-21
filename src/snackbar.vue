<template>
    <div class="snackbar" v-show="cfgSnackbar.visible" :class="{'snackbar-com-action': cfgSnackbar.primaryAction.description}">
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
const noop = () => {}

export const snackbarService = {
    show(obj) {
        if (!obj) {
            return
        }

        Object.assign(obj, {visible: true})

        if (!obj.primaryAction) {
            obj.primaryAction = {
                description: '',
                action: noop,
            }            
        }

        // show snackbar
    },
    hide() {
        // hide snackbar
    },
}
export default {
    
}
</script>

<style lang="scss" scoped>
@import "../../comum/styles/blo_webapp_constantes.scss";

$espacamento-default: 15px;
$border-radius-default: 4px;
$width-medium-device: 768px;

.snackbar {
    position: fixed;
    left: $espacamento-default;
    right: $espacamento-default;
    bottom: 15px;
    width: calc(100% - 30px);
    background-color: #323232;
    border-radius: $border-radius-default;
    z-index: 1;

    &.snackbar-has-action .snackbar-description-container {
        padding: $espacamento-default $espacamento-default 0 $espacamento-default;
    }

    .snackbar-description-container {
        float: left;
        padding: $espacamento-default;

        .snackbar-description {
            color: #e0e0e0;
            margin-bottom: 0;
        }

        @media(min-width: $width-medium-device) {
            padding: $espacamento-default;
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
