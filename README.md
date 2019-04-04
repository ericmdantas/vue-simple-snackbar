# vue-snackbar

[![Build](https://travis-ci.org/ericmdantas/vue-snackbar.svg?branch=master)](https://travis-ci.org/ericmdantas/vue-snackbar)

### Install

```shell
$ npm i --save vue-snackbar
```

### Usage

```js
// app.vue

<template>
    <div>   
        <snackbar></snackbar>
    </div>
</template>

<script>
import Vue from 'vue'
import VueSnackbar from 'vue-snackbar'

Vue.use(VueSnackbar)

export default {
    mounted() {
        setTimeout(() => {
            this.$snackbar.show({
                message: 'Hooray!',
                primaryAction: {
                    description: `I'm a button`,
                    action: () => alert('hello')
                }
            })
        }, 1000)
    }
}
</script>
```

### Methods

```js
this.$snackbar.show({
    message: 'Hooray!',
    primaryAction: {
        description: `I'm a button`,
        action: () => alert('hello')
    }
})

this.$snackbar.hide()
```

### License

MIT